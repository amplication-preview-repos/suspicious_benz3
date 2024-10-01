/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { AutoResponseUpdateManyWithoutTwitterAccountsInput } from "./AutoResponseUpdateManyWithoutTwitterAccountsInput";
import { Type } from "class-transformer";

@InputType()
class TwitterAccountUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accessToken?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accessTokenSecret?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountName?: string | null;

  @ApiProperty({
    required: false,
    type: () => AutoResponseUpdateManyWithoutTwitterAccountsInput,
  })
  @ValidateNested()
  @Type(() => AutoResponseUpdateManyWithoutTwitterAccountsInput)
  @IsOptional()
  @Field(() => AutoResponseUpdateManyWithoutTwitterAccountsInput, {
    nullable: true,
  })
  autoResponses?: AutoResponseUpdateManyWithoutTwitterAccountsInput;
}

export { TwitterAccountUpdateInput as TwitterAccountUpdateInput };