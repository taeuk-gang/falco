import styled from 'styled-components';
import { colorUsage, fontFamily, fontSize, getSpacing, lineHeight } from 'stylesheet';

interface AddInputProps {
  isAdding: boolean;
}

const genericStyle = `
  font-family: ${fontFamily.mainSans};
  font-size: ${fontSize.inputText};
  line-height: ${lineHeight.inputText};
  color: ${colorUsage.inputText};
  background-color: inherit;
  margin-right: ${getSpacing(4)};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const addInputStyle = `
  ${genericStyle}
  border: solid 1px ${colorUsage.editableRowInputBorder};
  border-radius: 3px;
  background-color: white;
  height: 80%;

  :focus {
    box-shadow: 0 2px 2px 0 ${colorUsage.editableRowInputBorder};
  }
`;

const editableInputStyle = `
  ${genericStyle}
  height: 90%;

  :hover:not(:disabled):not(:focus) {
    opacity: 0.5;
  }

  :focus {
    border: solid 1px ${colorUsage.editableRowInputBorder};
    box-shadow: 0 2px 2px 0 ${colorUsage.editableRowInputBorder};
    border-radius: 3px;
    background-color: white;
  }
`;

export const AddNameInput = styled.input`
  ${addInputStyle}
  display: ${(props: AddInputProps) => props.isAdding ? "visible" : "none"};
  width: 40%;
`;

export const AddBrowserInput = styled.input`
  ${addInputStyle}
  display: ${(props: AddInputProps) => props.isAdding ? "visible" : "none"};
  width: 40%;
`;

export const AddNetworkShapeInput = styled.input`
  ${addInputStyle}
  display: ${(props: AddInputProps) => props.isAdding ? "visible" : "none"};
  width: 20%;
`;

export const EditNameInput = styled.input`
  ${editableInputStyle}
  width: 40%;
`;

export const EditNetworkShapeInput = styled.input`
  ${editableInputStyle}
  width: 20%;
`;

export const EditBrowserInput = styled.input`
  ${editableInputStyle}
  width: 40%;
`;

export const AddAuditParameterButtonContainer = styled.div`
  display: ${(props: AddInputProps) => props.isAdding ? "none" : "flex"};
  align-items: center;
  cursor: pointer;
  margin: auto;

  &:hover {
    opacity: 0.5;
    background: white;
    transition-duration: 0.2s;
  };
`;

export const AddAuditParameterButtonLabel = styled.div`
  margin-left: ${getSpacing(4)};
`

export const EditButtonContainer = styled.div`
  width: 5%;
  display: flex;
  flex-direction: row-reverse;
`;

export const EditButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  padding: 2px;
  background: inherit;

  &:hover {
    opacity: 0.5;
    background: white;
    transition-duration: 0.2s;
  }
`;

export const AuditParameterDeleteContainer = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AuditParameterRowButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  padding: 2px;
  background: inherit;

  &:hover {
    opacity: 0.5;
    background: white;
    transition-duration: 0.2s;
  }
`;

export const AddAuditParameterButtonsContainer = styled.div`
  display: ${(props: AddInputProps) => props.isAdding ? "flex" : "none"};
  width: 60px;
  flex-direction: row;
  justify-content: flex-end;
`;
