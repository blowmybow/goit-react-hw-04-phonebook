import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 480px;
  padding: 18px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #f1a702;
  list-style: none;
  margin-top: 15px;
`;

export const Item = styled.li`
  background-color: #f36e0621;
  border: 3px solid #f1a702;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
export const Span = styled.span`
  color: #f1a702;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  border: 3px solid #f1a702;
  color: #f1a702;
  background-color: #f36e0621;
`;
