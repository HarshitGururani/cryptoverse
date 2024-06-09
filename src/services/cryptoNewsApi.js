/* eslint-disable no-unused-labels */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const KEY = import.meta.env.VITE_RAPID_API_NEWS_KEY;
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com',
    prepareHeaders: (header) => {
      header.set('X-RapidAPI-Key', KEY);
      header.set('X-RapidAPI-Host', 'cryptocurrency-news2.p.rapidapi.com');

      return header;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => '/v1/coindesk',
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
