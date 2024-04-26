import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '4e67571954msh027bb330349dd36p1f47dfjsn1898df98ad95',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => ({
        url: `/coins?limit=${count}`,
        headers: cryptoApiHeaders,
      }),
    }),
    getCryptosDetails: builder.query({
      query: (coinID) => ({
        url: `/coin/${coinID}`,
        headers: cryptoApiHeaders,
      }),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery } = cryptoApi;
