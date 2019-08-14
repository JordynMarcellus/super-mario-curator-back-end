// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  course: (where?: CourseWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  world: (where?: WorldWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  course: (where: CourseWhereUniqueInput) => CourseNullablePromise;
  courses: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Course>;
  coursesConnection: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CourseConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  world: (where: WorldWhereUniqueInput) => WorldNullablePromise;
  worlds: (args?: {
    where?: WorldWhereInput;
    orderBy?: WorldOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<World>;
  worldsConnection: (args?: {
    where?: WorldWhereInput;
    orderBy?: WorldOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => WorldConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCourse: (data: CourseCreateInput) => CoursePromise;
  updateCourse: (args: {
    data: CourseUpdateInput;
    where: CourseWhereUniqueInput;
  }) => CoursePromise;
  updateManyCourses: (args: {
    data: CourseUpdateManyMutationInput;
    where?: CourseWhereInput;
  }) => BatchPayloadPromise;
  upsertCourse: (args: {
    where: CourseWhereUniqueInput;
    create: CourseCreateInput;
    update: CourseUpdateInput;
  }) => CoursePromise;
  deleteCourse: (where: CourseWhereUniqueInput) => CoursePromise;
  deleteManyCourses: (where?: CourseWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createWorld: (data: WorldCreateInput) => WorldPromise;
  updateWorld: (args: {
    data: WorldUpdateInput;
    where: WorldWhereUniqueInput;
  }) => WorldPromise;
  upsertWorld: (args: {
    where: WorldWhereUniqueInput;
    create: WorldCreateInput;
    update: WorldUpdateInput;
  }) => WorldPromise;
  deleteWorld: (where: WorldWhereUniqueInput) => WorldPromise;
  deleteManyWorlds: (where?: WorldWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  course: (
    where?: CourseSubscriptionWhereInput
  ) => CourseSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  world: (
    where?: WorldSubscriptionWhereInput
  ) => WorldSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CourseOrderByInput =
  | "courseUUID_ASC"
  | "courseUUID_DESC"
  | "courseId_ASC"
  | "courseId_DESC"
  | "isDeleted_ASC"
  | "isDeleted_DESC"
  | "description_ASC"
  | "description_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Permission =
  | "ADMIN"
  | "USER"
  | "ITEM_CREATE"
  | "ITEM_UPDATE"
  | "ITEM_DELETE"
  | "PERMISSION_UPDATE";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "makerId_ASC"
  | "makerId_DESC"
  | "resetToken_ASC"
  | "resetToken_DESC"
  | "restTokenExpiry_ASC"
  | "restTokenExpiry_DESC";

export type WorldOrderByInput =
  | "worldUUID_ASC"
  | "worldUUID_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CourseCreateInput {
  courseUUID?: Maybe<ID_Input>;
  courseId: String;
  isDeleted: Boolean;
  description?: Maybe<String>;
}

export type CourseWhereUniqueInput = AtLeastOne<{
  courseUUID: Maybe<ID_Input>;
}>;

export interface WorldUpdateInput {
  courses?: Maybe<CourseUpdateManyInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  makerId?: Maybe<String>;
  resetToken?: Maybe<String>;
  restTokenExpiry?: Maybe<Float>;
  permissions?: Maybe<UserCreatepermissionsInput>;
}

export type WorldWhereUniqueInput = AtLeastOne<{
  worldUUID: Maybe<ID_Input>;
}>;

export interface CourseWhereInput {
  courseUUID?: Maybe<ID_Input>;
  courseUUID_not?: Maybe<ID_Input>;
  courseUUID_in?: Maybe<ID_Input[] | ID_Input>;
  courseUUID_not_in?: Maybe<ID_Input[] | ID_Input>;
  courseUUID_lt?: Maybe<ID_Input>;
  courseUUID_lte?: Maybe<ID_Input>;
  courseUUID_gt?: Maybe<ID_Input>;
  courseUUID_gte?: Maybe<ID_Input>;
  courseUUID_contains?: Maybe<ID_Input>;
  courseUUID_not_contains?: Maybe<ID_Input>;
  courseUUID_starts_with?: Maybe<ID_Input>;
  courseUUID_not_starts_with?: Maybe<ID_Input>;
  courseUUID_ends_with?: Maybe<ID_Input>;
  courseUUID_not_ends_with?: Maybe<ID_Input>;
  courseId?: Maybe<String>;
  courseId_not?: Maybe<String>;
  courseId_in?: Maybe<String[] | String>;
  courseId_not_in?: Maybe<String[] | String>;
  courseId_lt?: Maybe<String>;
  courseId_lte?: Maybe<String>;
  courseId_gt?: Maybe<String>;
  courseId_gte?: Maybe<String>;
  courseId_contains?: Maybe<String>;
  courseId_not_contains?: Maybe<String>;
  courseId_starts_with?: Maybe<String>;
  courseId_not_starts_with?: Maybe<String>;
  courseId_ends_with?: Maybe<String>;
  courseId_not_ends_with?: Maybe<String>;
  isDeleted?: Maybe<Boolean>;
  isDeleted_not?: Maybe<Boolean>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<CourseWhereInput[] | CourseWhereInput>;
  OR?: Maybe<CourseWhereInput[] | CourseWhereInput>;
  NOT?: Maybe<CourseWhereInput[] | CourseWhereInput>;
}

export interface CourseCreateManyInput {
  create?: Maybe<CourseCreateInput[] | CourseCreateInput>;
  connect?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface WorldWhereInput {
  worldUUID?: Maybe<ID_Input>;
  worldUUID_not?: Maybe<ID_Input>;
  worldUUID_in?: Maybe<ID_Input[] | ID_Input>;
  worldUUID_not_in?: Maybe<ID_Input[] | ID_Input>;
  worldUUID_lt?: Maybe<ID_Input>;
  worldUUID_lte?: Maybe<ID_Input>;
  worldUUID_gt?: Maybe<ID_Input>;
  worldUUID_gte?: Maybe<ID_Input>;
  worldUUID_contains?: Maybe<ID_Input>;
  worldUUID_not_contains?: Maybe<ID_Input>;
  worldUUID_starts_with?: Maybe<ID_Input>;
  worldUUID_not_starts_with?: Maybe<ID_Input>;
  worldUUID_ends_with?: Maybe<ID_Input>;
  worldUUID_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  courses_every?: Maybe<CourseWhereInput>;
  courses_some?: Maybe<CourseWhereInput>;
  courses_none?: Maybe<CourseWhereInput>;
  AND?: Maybe<WorldWhereInput[] | WorldWhereInput>;
  OR?: Maybe<WorldWhereInput[] | WorldWhereInput>;
  NOT?: Maybe<WorldWhereInput[] | WorldWhereInput>;
}

export interface CourseUpdateManyDataInput {
  courseId?: Maybe<String>;
  isDeleted?: Maybe<Boolean>;
  description?: Maybe<String>;
}

export interface WorldCreateInput {
  worldUUID?: Maybe<ID_Input>;
  courses?: Maybe<CourseCreateManyInput>;
}

export interface CourseUpdateManyWithWhereNestedInput {
  where: CourseScalarWhereInput;
  data: CourseUpdateManyDataInput;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  makerId?: Maybe<String>;
  resetToken?: Maybe<String>;
  restTokenExpiry?: Maybe<Float>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
}

export interface CourseUpsertWithWhereUniqueNestedInput {
  where: CourseWhereUniqueInput;
  update: CourseUpdateDataInput;
  create: CourseCreateInput;
}

export interface UserUpdatepermissionsInput {
  set?: Maybe<Permission[] | Permission>;
}

export interface CourseUpdateDataInput {
  courseId?: Maybe<String>;
  isDeleted?: Maybe<Boolean>;
  description?: Maybe<String>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  makerId?: Maybe<String>;
  resetToken?: Maybe<String>;
  restTokenExpiry?: Maybe<Float>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
}

export interface CourseUpdateManyInput {
  create?: Maybe<CourseCreateInput[] | CourseCreateInput>;
  update?: Maybe<
    | CourseUpdateWithWhereUniqueNestedInput[]
    | CourseUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | CourseUpsertWithWhereUniqueNestedInput[]
    | CourseUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  connect?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  set?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  disconnect?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  deleteMany?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
  updateMany?: Maybe<
    | CourseUpdateManyWithWhereNestedInput[]
    | CourseUpdateManyWithWhereNestedInput
  >;
}

export interface CourseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CourseWhereInput>;
  AND?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
  OR?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
  NOT?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
}

export interface CourseUpdateManyMutationInput {
  courseId?: Maybe<String>;
  isDeleted?: Maybe<Boolean>;
  description?: Maybe<String>;
}

export interface CourseUpdateInput {
  courseId?: Maybe<String>;
  isDeleted?: Maybe<Boolean>;
  description?: Maybe<String>;
}

export interface UserCreatepermissionsInput {
  set?: Maybe<Permission[] | Permission>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface WorldSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<WorldWhereInput>;
  AND?: Maybe<WorldSubscriptionWhereInput[] | WorldSubscriptionWhereInput>;
  OR?: Maybe<WorldSubscriptionWhereInput[] | WorldSubscriptionWhereInput>;
  NOT?: Maybe<WorldSubscriptionWhereInput[] | WorldSubscriptionWhereInput>;
}

export interface CourseUpdateWithWhereUniqueNestedInput {
  where: CourseWhereUniqueInput;
  data: CourseUpdateDataInput;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  makerId?: Maybe<String>;
  makerId_not?: Maybe<String>;
  makerId_in?: Maybe<String[] | String>;
  makerId_not_in?: Maybe<String[] | String>;
  makerId_lt?: Maybe<String>;
  makerId_lte?: Maybe<String>;
  makerId_gt?: Maybe<String>;
  makerId_gte?: Maybe<String>;
  makerId_contains?: Maybe<String>;
  makerId_not_contains?: Maybe<String>;
  makerId_starts_with?: Maybe<String>;
  makerId_not_starts_with?: Maybe<String>;
  makerId_ends_with?: Maybe<String>;
  makerId_not_ends_with?: Maybe<String>;
  resetToken?: Maybe<String>;
  resetToken_not?: Maybe<String>;
  resetToken_in?: Maybe<String[] | String>;
  resetToken_not_in?: Maybe<String[] | String>;
  resetToken_lt?: Maybe<String>;
  resetToken_lte?: Maybe<String>;
  resetToken_gt?: Maybe<String>;
  resetToken_gte?: Maybe<String>;
  resetToken_contains?: Maybe<String>;
  resetToken_not_contains?: Maybe<String>;
  resetToken_starts_with?: Maybe<String>;
  resetToken_not_starts_with?: Maybe<String>;
  resetToken_ends_with?: Maybe<String>;
  resetToken_not_ends_with?: Maybe<String>;
  restTokenExpiry?: Maybe<Float>;
  restTokenExpiry_not?: Maybe<Float>;
  restTokenExpiry_in?: Maybe<Float[] | Float>;
  restTokenExpiry_not_in?: Maybe<Float[] | Float>;
  restTokenExpiry_lt?: Maybe<Float>;
  restTokenExpiry_lte?: Maybe<Float>;
  restTokenExpiry_gt?: Maybe<Float>;
  restTokenExpiry_gte?: Maybe<Float>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface CourseScalarWhereInput {
  courseUUID?: Maybe<ID_Input>;
  courseUUID_not?: Maybe<ID_Input>;
  courseUUID_in?: Maybe<ID_Input[] | ID_Input>;
  courseUUID_not_in?: Maybe<ID_Input[] | ID_Input>;
  courseUUID_lt?: Maybe<ID_Input>;
  courseUUID_lte?: Maybe<ID_Input>;
  courseUUID_gt?: Maybe<ID_Input>;
  courseUUID_gte?: Maybe<ID_Input>;
  courseUUID_contains?: Maybe<ID_Input>;
  courseUUID_not_contains?: Maybe<ID_Input>;
  courseUUID_starts_with?: Maybe<ID_Input>;
  courseUUID_not_starts_with?: Maybe<ID_Input>;
  courseUUID_ends_with?: Maybe<ID_Input>;
  courseUUID_not_ends_with?: Maybe<ID_Input>;
  courseId?: Maybe<String>;
  courseId_not?: Maybe<String>;
  courseId_in?: Maybe<String[] | String>;
  courseId_not_in?: Maybe<String[] | String>;
  courseId_lt?: Maybe<String>;
  courseId_lte?: Maybe<String>;
  courseId_gt?: Maybe<String>;
  courseId_gte?: Maybe<String>;
  courseId_contains?: Maybe<String>;
  courseId_not_contains?: Maybe<String>;
  courseId_starts_with?: Maybe<String>;
  courseId_not_starts_with?: Maybe<String>;
  courseId_ends_with?: Maybe<String>;
  courseId_not_ends_with?: Maybe<String>;
  isDeleted?: Maybe<Boolean>;
  isDeleted_not?: Maybe<Boolean>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
  OR?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
  NOT?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface CoursePreviousValues {
  courseUUID: ID_Output;
  courseId: String;
  isDeleted: Boolean;
  description?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface CoursePreviousValuesPromise
  extends Promise<CoursePreviousValues>,
    Fragmentable {
  courseUUID: () => Promise<ID_Output>;
  courseId: () => Promise<String>;
  isDeleted: () => Promise<Boolean>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface CoursePreviousValuesSubscription
  extends Promise<AsyncIterator<CoursePreviousValues>>,
    Fragmentable {
  courseUUID: () => Promise<AsyncIterator<ID_Output>>;
  courseId: () => Promise<AsyncIterator<String>>;
  isDeleted: () => Promise<AsyncIterator<Boolean>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  makerId?: String;
  resetToken?: String;
  restTokenExpiry?: Float;
  permissions: Permission[];
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  makerId: () => Promise<String>;
  resetToken: () => Promise<String>;
  restTokenExpiry: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  makerId: () => Promise<AsyncIterator<String>>;
  resetToken: () => Promise<AsyncIterator<String>>;
  restTokenExpiry: () => Promise<AsyncIterator<Float>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
}

export interface WorldPreviousValues {
  worldUUID: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface WorldPreviousValuesPromise
  extends Promise<WorldPreviousValues>,
    Fragmentable {
  worldUUID: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface WorldPreviousValuesSubscription
  extends Promise<AsyncIterator<WorldPreviousValues>>,
    Fragmentable {
  worldUUID: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateWorld {
  count: Int;
}

export interface AggregateWorldPromise
  extends Promise<AggregateWorld>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateWorldSubscription
  extends Promise<AsyncIterator<AggregateWorld>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface WorldConnection {
  pageInfo: PageInfo;
  edges: WorldEdge[];
}

export interface WorldConnectionPromise
  extends Promise<WorldConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<WorldEdge>>() => T;
  aggregate: <T = AggregateWorldPromise>() => T;
}

export interface WorldConnectionSubscription
  extends Promise<AsyncIterator<WorldConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<WorldEdgeSubscription>>>() => T;
  aggregate: <T = AggregateWorldSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  makerId?: String;
  resetToken?: String;
  restTokenExpiry?: Float;
  permissions: Permission[];
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  makerId: () => Promise<String>;
  resetToken: () => Promise<String>;
  restTokenExpiry: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  makerId: () => Promise<AsyncIterator<String>>;
  resetToken: () => Promise<AsyncIterator<String>>;
  restTokenExpiry: () => Promise<AsyncIterator<Float>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  makerId: () => Promise<String>;
  resetToken: () => Promise<String>;
  restTokenExpiry: () => Promise<Float>;
  permissions: () => Promise<Permission[]>;
}

export interface World {
  worldUUID: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface WorldPromise extends Promise<World>, Fragmentable {
  worldUUID: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  courses: <T = FragmentableArray<Course>>(args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface WorldSubscription
  extends Promise<AsyncIterator<World>>,
    Fragmentable {
  worldUUID: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  courses: <T = Promise<AsyncIterator<CourseSubscription>>>(args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface WorldNullablePromise
  extends Promise<World | null>,
    Fragmentable {
  worldUUID: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  courses: <T = FragmentableArray<Course>>(args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CourseSubscriptionPayload {
  mutation: MutationType;
  node: Course;
  updatedFields: String[];
  previousValues: CoursePreviousValues;
}

export interface CourseSubscriptionPayloadPromise
  extends Promise<CourseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CoursePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CoursePreviousValuesPromise>() => T;
}

export interface CourseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CourseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CourseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CoursePreviousValuesSubscription>() => T;
}

export interface Course {
  courseUUID: ID_Output;
  courseId: String;
  isDeleted: Boolean;
  description?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface CoursePromise extends Promise<Course>, Fragmentable {
  courseUUID: () => Promise<ID_Output>;
  courseId: () => Promise<String>;
  isDeleted: () => Promise<Boolean>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface CourseSubscription
  extends Promise<AsyncIterator<Course>>,
    Fragmentable {
  courseUUID: () => Promise<AsyncIterator<ID_Output>>;
  courseId: () => Promise<AsyncIterator<String>>;
  isDeleted: () => Promise<AsyncIterator<Boolean>>;
  description: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface CourseNullablePromise
  extends Promise<Course | null>,
    Fragmentable {
  courseUUID: () => Promise<ID_Output>;
  courseId: () => Promise<String>;
  isDeleted: () => Promise<Boolean>;
  description: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface CourseEdge {
  node: Course;
  cursor: String;
}

export interface CourseEdgePromise extends Promise<CourseEdge>, Fragmentable {
  node: <T = CoursePromise>() => T;
  cursor: () => Promise<String>;
}

export interface CourseEdgeSubscription
  extends Promise<AsyncIterator<CourseEdge>>,
    Fragmentable {
  node: <T = CourseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCourse {
  count: Int;
}

export interface AggregateCoursePromise
  extends Promise<AggregateCourse>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCourseSubscription
  extends Promise<AsyncIterator<AggregateCourse>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface WorldSubscriptionPayload {
  mutation: MutationType;
  node: World;
  updatedFields: String[];
  previousValues: WorldPreviousValues;
}

export interface WorldSubscriptionPayloadPromise
  extends Promise<WorldSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = WorldPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = WorldPreviousValuesPromise>() => T;
}

export interface WorldSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<WorldSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = WorldSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = WorldPreviousValuesSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CourseConnection {
  pageInfo: PageInfo;
  edges: CourseEdge[];
}

export interface CourseConnectionPromise
  extends Promise<CourseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CourseEdge>>() => T;
  aggregate: <T = AggregateCoursePromise>() => T;
}

export interface CourseConnectionSubscription
  extends Promise<AsyncIterator<CourseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CourseEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCourseSubscription>() => T;
}

export interface WorldEdge {
  node: World;
  cursor: String;
}

export interface WorldEdgePromise extends Promise<WorldEdge>, Fragmentable {
  node: <T = WorldPromise>() => T;
  cursor: () => Promise<String>;
}

export interface WorldEdgeSubscription
  extends Promise<AsyncIterator<WorldEdge>>,
    Fragmentable {
  node: <T = WorldSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Course",
    embedded: false
  },
  {
    name: "World",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
