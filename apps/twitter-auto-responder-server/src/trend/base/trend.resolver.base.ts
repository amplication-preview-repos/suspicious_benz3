/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Trend } from "./Trend";
import { TrendCountArgs } from "./TrendCountArgs";
import { TrendFindManyArgs } from "./TrendFindManyArgs";
import { TrendFindUniqueArgs } from "./TrendFindUniqueArgs";
import { CreateTrendArgs } from "./CreateTrendArgs";
import { UpdateTrendArgs } from "./UpdateTrendArgs";
import { DeleteTrendArgs } from "./DeleteTrendArgs";
import { AutoResponseFindManyArgs } from "../../autoResponse/base/AutoResponseFindManyArgs";
import { AutoResponse } from "../../autoResponse/base/AutoResponse";
import { TrendService } from "../trend.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Trend)
export class TrendResolverBase {
  constructor(
    protected readonly service: TrendService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Trend",
    action: "read",
    possession: "any",
  })
  async _trendsMeta(
    @graphql.Args() args: TrendCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Trend])
  @nestAccessControl.UseRoles({
    resource: "Trend",
    action: "read",
    possession: "any",
  })
  async trends(@graphql.Args() args: TrendFindManyArgs): Promise<Trend[]> {
    return this.service.trends(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Trend, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Trend",
    action: "read",
    possession: "own",
  })
  async trend(
    @graphql.Args() args: TrendFindUniqueArgs
  ): Promise<Trend | null> {
    const result = await this.service.trend(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Trend)
  @nestAccessControl.UseRoles({
    resource: "Trend",
    action: "create",
    possession: "any",
  })
  async createTrend(@graphql.Args() args: CreateTrendArgs): Promise<Trend> {
    return await this.service.createTrend({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Trend)
  @nestAccessControl.UseRoles({
    resource: "Trend",
    action: "update",
    possession: "any",
  })
  async updateTrend(
    @graphql.Args() args: UpdateTrendArgs
  ): Promise<Trend | null> {
    try {
      return await this.service.updateTrend({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Trend)
  @nestAccessControl.UseRoles({
    resource: "Trend",
    action: "delete",
    possession: "any",
  })
  async deleteTrend(
    @graphql.Args() args: DeleteTrendArgs
  ): Promise<Trend | null> {
    try {
      return await this.service.deleteTrend(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [AutoResponse], { name: "autoResponses" })
  @nestAccessControl.UseRoles({
    resource: "AutoResponse",
    action: "read",
    possession: "any",
  })
  async findAutoResponses(
    @graphql.Parent() parent: Trend,
    @graphql.Args() args: AutoResponseFindManyArgs
  ): Promise<AutoResponse[]> {
    const results = await this.service.findAutoResponses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}