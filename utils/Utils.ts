import { faker } from "@faker-js/faker";

export function generatePassword(passwordLenght = 8): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/";
  let password = "";
  for (let i = 0; i < passwordLenght; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;
}

export interface CreateUser {
  email: string;
  password: string;
  stateCode: string;
}

export async function getUser(): Promise<CreateUser> {
  const password = generatePassword();
  const stateCode = getRandomStateCode();
  return {
    email: faker.internet.email(),
    password,
    stateCode,
  };
}

export function getRandomStateCode(): string {
  const stateCodes = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const randomIndex = Math.floor(Math.random() * stateCodes.length);
  return stateCodes[randomIndex];
}
