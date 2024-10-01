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
import { TwitterAccountWhereUniqueInput } from "./TwitterAccountWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TwitterAccountUpdateInput } from "./TwitterAccountUpdateInput";

@ArgsType()
class UpdateTwitterAccountArgs {
  @ApiProperty({
    required: true,
    type: () => TwitterAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TwitterAccountWhereUniqueInput)
  @Field(() => TwitterAccountWhereUniqueInput, { nullable: false })
  where!: TwitterAccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TwitterAccountUpdateInput,
  })
  @ValidateNested()
  @Type(() => TwitterAccountUpdateInput)
  @Field(() => TwitterAccountUpdateInput, { nullable: false })
  data!: TwitterAccountUpdateInput;
}

export { UpdateTwitterAccountArgs as UpdateTwitterAccountArgs };
