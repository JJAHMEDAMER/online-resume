import { POSITIONS } from "../constants";

interface getForPositionParams<T> {
  frontend: T;
  backend: T;
  fullstack: T;
}
export const getForPosition = <T>(
  position: string,
  { frontend, backend, fullstack }: getForPositionParams<T>
) => {
  if (position === POSITIONS.FRONTEND) {
    return frontend;
  } else if (position === POSITIONS.BACKEND) {
    return backend;
  } else if (position === POSITIONS.FULLSTACK) {
    return fullstack;
  }
};

export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};
