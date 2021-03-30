import styled from "styled-components";

export const FormGroup = styled.div`
  margin: 30px auto 10px;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid #efb6b2;
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: #efb6b2;
  font-weight: bold;
  font-size: 24px;

  &:hover {
    background: #efb6b2;
    color: white;
  }
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

export const Output = styled.div`
  height: 60px;
  font-size: 0.8rem;
`;

export const Error = styled.div`
  color: #ff4a4a;
`;
