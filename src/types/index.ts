// Service types

// export type RequestWithPagination = {
//   limit: number;
//   offset: number;
// };

// export type ResponseWithPagination<T> = {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: T[];
// };

// export type BaseShortType = {
//   name: string;
//   url: string;
// };

// Input types

export type LoginInput = {
  email: string;
  password: string;
};

export type ForgotPasswordInput = {
  email: string;
};

export type SetNewPasswordInput = {
  password: string;
  token?: string;
  secret?: string;
};

// Response types

export type BaseResponse = {
  error: number;
  detail: string;
  timestamp: number;
};

export type LoginResponse = BaseResponse & {
  access_token: string;
  refresh_token: string;
  token_expire: string;
  refresh_token_expire: string;
};

// // Main types

// export type TPokemonMove = BaseShortType;
// export type TPokemonAbility = BaseShortType;
// export type TShortPokemon = BaseShortType;
// export type TShortPokemonType = BaseShortType;

// export type TPokemon = {
//   id: number;
//   name: string;
//   base_experience: number;
//   height: number;
//   is_default: boolean;
//   order: number;
//   weight: number;
//   sprites: {
//     back_default: string | null;
//     back_female: string | null;
//     back_shiny: string | null;
//     back_shiny_female: string | null;
//     front_default: string | null;
//     front_female: string | null;
//     front_shiny: string | null;
//     front_shiny_female: string | null;
//   };
//   types: { slot: number; type: TShortPokemonType }[];
//   abilities: { slot: number; is_hidden: boolean; ability: TPokemonAbility }[];
//   moves: {
//     version_group_details: any[];
//     move: TPokemonMove;
//   }[];
// };

// export type TPokemonType = {
//   id: number;
//   name: string;
//   pokemon: { slot: number; pokemon: TShortPokemon }[];
// };
