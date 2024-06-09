import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const KEY = import.meta.env.VITE_RAPID_API_COIN_KEY;

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', KEY);
      headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptosDetails: builder.query({
      query: (coinID) => `/coin/${coinID}`,
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery } = cryptoApi;
