import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: number;
};

interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: false,
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
      providesTags: [{ type: "Todos", id: "LIST" }],
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
      providesTags: (result, error, { id }) => [{ type: "Todos", id: `${id}` }],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: "PUT",
          body: todo,
        };
      },
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    deleteTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: "DELETE",
          body: todo,
        };
      },
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: builder.mutation<string, string>({
      query(text) {
        return {
          url: `todos`,
          method: "POST",
          body: {
            text,
          },
        };
      },
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
