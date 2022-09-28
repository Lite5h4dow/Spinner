export interface Container {
  Image?: string;
  AttachStdin: boolean;
  AttachStdout: boolean;
  AttachStderr: boolean;
  Tty: boolean;
  Cmd?: string[];
  OpenStdin: boolean;
  StdinOnce: boolean;
}
