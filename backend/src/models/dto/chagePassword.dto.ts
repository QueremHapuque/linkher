import { Request } from 'express';

export interface ReqChangePasswordDto extends Request {
  body: changePasswordDto;
}

export interface changePasswordDto {
  currentPassword: string;
  newPassword: string;
}
