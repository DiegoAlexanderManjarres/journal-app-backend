// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
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
  entry: (where?: EntryWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
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

  entry: (where: EntryWhereUniqueInput) => EntryNullablePromise;
  entries: (args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Entry>;
  entriesConnection: (args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EntryConnectionPromise;
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
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEntry: (data: EntryCreateInput) => EntryPromise;
  updateEntry: (args: {
    data: EntryUpdateInput;
    where: EntryWhereUniqueInput;
  }) => EntryPromise;
  updateManyEntries: (args: {
    data: EntryUpdateManyMutationInput;
    where?: EntryWhereInput;
  }) => BatchPayloadPromise;
  upsertEntry: (args: {
    where: EntryWhereUniqueInput;
    create: EntryCreateInput;
    update: EntryUpdateInput;
  }) => EntryPromise;
  deleteEntry: (where: EntryWhereUniqueInput) => EntryPromise;
  deleteManyEntries: (where?: EntryWhereInput) => BatchPayloadPromise;
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

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  entry: (
    where?: EntrySubscriptionWhereInput
  ) => EntrySubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EntryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "text_ASC"
  | "text_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "isConfirmed_ASC"
  | "isConfirmed_DESC"
  | "login_fail_ASC"
  | "login_fail_DESC"
  | "last_login_ASC"
  | "last_login_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type EntryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EntryWhereInput {
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
  author?: Maybe<UserWhereInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<EntryWhereInput[] | EntryWhereInput>;
  OR?: Maybe<EntryWhereInput[] | EntryWhereInput>;
  NOT?: Maybe<EntryWhereInput[] | EntryWhereInput>;
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
  entries_every?: Maybe<EntryWhereInput>;
  entries_some?: Maybe<EntryWhereInput>;
  entries_none?: Maybe<EntryWhereInput>;
  isConfirmed?: Maybe<Boolean>;
  isConfirmed_not?: Maybe<Boolean>;
  login_fail?: Maybe<Int>;
  login_fail_not?: Maybe<Int>;
  login_fail_in?: Maybe<Int[] | Int>;
  login_fail_not_in?: Maybe<Int[] | Int>;
  login_fail_lt?: Maybe<Int>;
  login_fail_lte?: Maybe<Int>;
  login_fail_gt?: Maybe<Int>;
  login_fail_gte?: Maybe<Int>;
  last_login?: Maybe<DateTimeInput>;
  last_login_not?: Maybe<DateTimeInput>;
  last_login_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  last_login_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  last_login_lt?: Maybe<DateTimeInput>;
  last_login_lte?: Maybe<DateTimeInput>;
  last_login_gt?: Maybe<DateTimeInput>;
  last_login_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface EntryCreateInput {
  id?: Maybe<ID_Input>;
  author: UserCreateOneWithoutEntriesInput;
  title: String;
  text: String;
}

export interface UserCreateOneWithoutEntriesInput {
  create?: Maybe<UserCreateWithoutEntriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutEntriesInput {
  id?: Maybe<ID_Input>;
  name: String;
  email?: Maybe<String>;
  password?: Maybe<String>;
  isConfirmed?: Maybe<Boolean>;
  login_fail?: Maybe<Int>;
  last_login: DateTimeInput;
}

export interface EntryUpdateInput {
  author?: Maybe<UserUpdateOneRequiredWithoutEntriesInput>;
  title?: Maybe<String>;
  text?: Maybe<String>;
}

export interface UserUpdateOneRequiredWithoutEntriesInput {
  create?: Maybe<UserCreateWithoutEntriesInput>;
  update?: Maybe<UserUpdateWithoutEntriesDataInput>;
  upsert?: Maybe<UserUpsertWithoutEntriesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutEntriesDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  isConfirmed?: Maybe<Boolean>;
  login_fail?: Maybe<Int>;
  last_login?: Maybe<DateTimeInput>;
}

export interface UserUpsertWithoutEntriesInput {
  update: UserUpdateWithoutEntriesDataInput;
  create: UserCreateWithoutEntriesInput;
}

export interface EntryUpdateManyMutationInput {
  title?: Maybe<String>;
  text?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email?: Maybe<String>;
  password?: Maybe<String>;
  entries?: Maybe<EntryCreateManyWithoutAuthorInput>;
  isConfirmed?: Maybe<Boolean>;
  login_fail?: Maybe<Int>;
  last_login: DateTimeInput;
}

export interface EntryCreateManyWithoutAuthorInput {
  create?: Maybe<
    EntryCreateWithoutAuthorInput[] | EntryCreateWithoutAuthorInput
  >;
  connect?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
}

export interface EntryCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  title: String;
  text: String;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  entries?: Maybe<EntryUpdateManyWithoutAuthorInput>;
  isConfirmed?: Maybe<Boolean>;
  login_fail?: Maybe<Int>;
  last_login?: Maybe<DateTimeInput>;
}

export interface EntryUpdateManyWithoutAuthorInput {
  create?: Maybe<
    EntryCreateWithoutAuthorInput[] | EntryCreateWithoutAuthorInput
  >;
  delete?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  connect?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  set?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  disconnect?: Maybe<EntryWhereUniqueInput[] | EntryWhereUniqueInput>;
  update?: Maybe<
    | EntryUpdateWithWhereUniqueWithoutAuthorInput[]
    | EntryUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | EntryUpsertWithWhereUniqueWithoutAuthorInput[]
    | EntryUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
  updateMany?: Maybe<
    EntryUpdateManyWithWhereNestedInput[] | EntryUpdateManyWithWhereNestedInput
  >;
}

export interface EntryUpdateWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput;
  data: EntryUpdateWithoutAuthorDataInput;
}

export interface EntryUpdateWithoutAuthorDataInput {
  title?: Maybe<String>;
  text?: Maybe<String>;
}

export interface EntryUpsertWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput;
  update: EntryUpdateWithoutAuthorDataInput;
  create: EntryCreateWithoutAuthorInput;
}

export interface EntryScalarWhereInput {
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
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
  OR?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
  NOT?: Maybe<EntryScalarWhereInput[] | EntryScalarWhereInput>;
}

export interface EntryUpdateManyWithWhereNestedInput {
  where: EntryScalarWhereInput;
  data: EntryUpdateManyDataInput;
}

export interface EntryUpdateManyDataInput {
  title?: Maybe<String>;
  text?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  isConfirmed?: Maybe<Boolean>;
  login_fail?: Maybe<Int>;
  last_login?: Maybe<DateTimeInput>;
}

export interface EntrySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EntryWhereInput>;
  AND?: Maybe<EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput>;
  OR?: Maybe<EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput>;
  NOT?: Maybe<EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput>;
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

export interface NodeNode {
  id: ID_Output;
}

export interface Entry {
  id: ID_Output;
  title: String;
  text: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface EntryPromise extends Promise<Entry>, Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  title: () => Promise<String>;
  text: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EntrySubscription
  extends Promise<AsyncIterator<Entry>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: <T = UserSubscription>() => T;
  title: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface EntryNullablePromise
  extends Promise<Entry | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  title: () => Promise<String>;
  text: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface User {
  id: ID_Output;
  name: String;
  email?: String;
  password?: String;
  isConfirmed: Boolean;
  login_fail: Int;
  last_login: DateTimeOutput;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  entries: <T = FragmentableArray<Entry>>(args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  isConfirmed: () => Promise<Boolean>;
  login_fail: () => Promise<Int>;
  last_login: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  entries: <T = Promise<AsyncIterator<EntrySubscription>>>(args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  isConfirmed: () => Promise<AsyncIterator<Boolean>>;
  login_fail: () => Promise<AsyncIterator<Int>>;
  last_login: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  entries: <T = FragmentableArray<Entry>>(args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  isConfirmed: () => Promise<Boolean>;
  login_fail: () => Promise<Int>;
  last_login: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EntryConnection {
  pageInfo: PageInfo;
  edges: EntryEdge[];
}

export interface EntryConnectionPromise
  extends Promise<EntryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EntryEdge>>() => T;
  aggregate: <T = AggregateEntryPromise>() => T;
}

export interface EntryConnectionSubscription
  extends Promise<AsyncIterator<EntryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EntryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEntrySubscription>() => T;
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

export interface EntryEdge {
  node: Entry;
  cursor: String;
}

export interface EntryEdgePromise extends Promise<EntryEdge>, Fragmentable {
  node: <T = EntryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EntryEdgeSubscription
  extends Promise<AsyncIterator<EntryEdge>>,
    Fragmentable {
  node: <T = EntrySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEntry {
  count: Int;
}

export interface AggregateEntryPromise
  extends Promise<AggregateEntry>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEntrySubscription
  extends Promise<AsyncIterator<AggregateEntry>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
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

export interface EntrySubscriptionPayload {
  mutation: MutationType;
  node: Entry;
  updatedFields: String[];
  previousValues: EntryPreviousValues;
}

export interface EntrySubscriptionPayloadPromise
  extends Promise<EntrySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EntryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EntryPreviousValuesPromise>() => T;
}

export interface EntrySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EntrySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EntrySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EntryPreviousValuesSubscription>() => T;
}

export interface EntryPreviousValues {
  id: ID_Output;
  title: String;
  text: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface EntryPreviousValuesPromise
  extends Promise<EntryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  text: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EntryPreviousValuesSubscription
  extends Promise<AsyncIterator<EntryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
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

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email?: String;
  password?: String;
  isConfirmed: Boolean;
  login_fail: Int;
  last_login: DateTimeOutput;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  isConfirmed: () => Promise<Boolean>;
  login_fail: () => Promise<Int>;
  last_login: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  isConfirmed: () => Promise<AsyncIterator<Boolean>>;
  login_fail: () => Promise<AsyncIterator<Int>>;
  last_login: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

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
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Entry",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
export const prisma = new Prisma();
