import { call, put, takeEvery } from 'redux-saga/effects';
import { makeGetRequest } from 'services/networking/request';
import { ActionType, getType } from 'typesafe-actions';

import { handleAPIExceptions } from 'services/networking/handleAPIExceptions';

import {
  fetchProjectError,
  fetchProjectRequest,
  fetchProjectsRequest,
  fetchProjectSuccess,
} from './actions';
import { modelizeProject, modelizeProjects } from './modelizer';
import { ApiProjectType } from './types';

function* fetchProjectsFailedHandler(error: Error) {
  yield put(fetchProjectError({ projectId: null, errorMessage: error.message }));
}

function* fetchProjectFailedHandler(error: Error, actionPayload: Record<string, any>) {
  yield put(fetchProjectError({ projectId: actionPayload.projectId, errorMessage: error.message }));
}

export function* fetchProjects() {
  const endpoint = '/api/projects/';
  const { body: projects }: { body: ApiProjectType[] } = yield call(
    makeGetRequest,
    endpoint,
    true,
    null,
  );
  yield put(fetchProjectSuccess({ byId: modelizeProjects(projects) }));
}

export function* fetchProject(action: ActionType<typeof fetchProjectRequest>) {
  const endpoint = `/api/projects/${action.payload.projectId}/`;
  const { body: project }: { body: ApiProjectType } = yield call(
    makeGetRequest,
    endpoint,
    true,
    null,
  );
  yield put(fetchProjectSuccess({ byId: modelizeProject(project) }));
}

export default function* projectsSaga() {
  yield takeEvery(
    getType(fetchProjectRequest),
    handleAPIExceptions(fetchProject, fetchProjectFailedHandler),
  );
  yield takeEvery(
    getType(fetchProjectsRequest),
    handleAPIExceptions(fetchProjects, fetchProjectsFailedHandler),
  );
}
