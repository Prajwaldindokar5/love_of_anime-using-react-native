import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

let token: string | null;

const fetchtoken = async () => {
  token = JSON.parse((await AsyncStorage.getItem("animehub_token")) as string);
  console.log(token);
};

fetchtoken();

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.131.170:8000/api/v1",
  prepareHeaders(header) {
    header.set("Authorization", `Bearer ${token}`);
  },
});

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  tagTypes: ["ANIME"],
  endpoints: (builder) => ({
    getAllAnimes: builder.query({
      providesTags: ["ANIME"],
      query: () => ({
        method: "GET",
        url: "/anime",
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/user/login",
        body: { ...data },
      }),
    }),
    handleFavourite: builder.mutation({
      invalidatesTags: ["ANIME"],
      query: (slug) => ({
        method: "PATCH",
        url: `/user/handleFavourite/${slug}`,
      }),
    }),
  }),
});

export const {
  useGetAllAnimesQuery,
  useLoginMutation,
  useHandleFavouriteMutation,
} = appApi;

export default appApi;
