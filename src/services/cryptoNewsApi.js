/* eslint-disable no-unused-labels */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
  'X-RapidAPI-Key': '4e67571954msh027bb330349dd36p1f47dfjsn1898df98ad95',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/v1/coindesk`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;