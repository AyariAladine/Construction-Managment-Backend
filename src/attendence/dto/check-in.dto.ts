import { IsString, IsOptional } from 'class-validator';

export class CheckInDto {
  @IsString()
  workerCode: string;

  @IsString()
  @IsOptional()
  siteId?: string;
}