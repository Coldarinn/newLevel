import { rtkApi } from 'shared/api/rtkApi';

const articleRecommendApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommend: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetArticleRecommendQuery } = articleRecommendApi;
