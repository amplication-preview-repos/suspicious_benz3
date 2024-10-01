/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AutoResponseWhereInput } from "./AutoResponseWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AutoResponseOrderByInput } from "./AutoResponseOrderByInput";

@ArgsType()
class AutoResponseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AutoResponseWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AutoResponseWhereInput, { nullable: true })
  @Type(() => AutoResponseWhereInput)
  where?: AutoResponseWhereInput;

  @ApiProperty({
    required: false,
    type: [AutoResponseOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AutoResponseOrderByInput], { nullable: true })
  @Type(() => AutoResponseOrderByInput)
  orderBy?: Array<AutoResponseOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AutoResponseFindManyArgs as AutoResponseFindManyArgs };