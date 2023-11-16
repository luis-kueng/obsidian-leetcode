import { request, gql } from 'graphql-request';
import * as fs from 'fs';
import * as path from 'path';

const GRAPHQL_ENDPOINT = 'https://continuous-fire-archaeopteryx.glitch.me/leetcode/daily';

  
async function getDailyProblem() {
  try {
        const response = await fetch(GRAPHQL_ENDPOINT, {
              method: 'GET',
        });

        const data = await response.json();
        return data.data.activeDailyCodingChallengeQuestion;

  } catch (error) {
    console.error('Error fetching data:', error.response?.data || error.message);
  }
}

export default getDailyProblem;
