type NullableString = string | null;

// https://libraries.io/api#project-search
export type LibraryModel = {
  dependent_repos_count: number;
  dependents_count: number;
  deprecation_reason: NullableString;
  description: NullableString;
  forks: number;
  homepage: NullableString;
  keywords: string[];
  language: string;
  latest_download_url: NullableString;
  latest_release_number: NullableString;
  latest_release_published_at: NullableString;
  latest_stable_release_number: NullableString;
  latest_stable_release_published_at: NullableString;
  license_normalized: boolean;
  licenses: NullableString;
  name: string;
  normalized_licenses: string[];
  package_manager_url: null;
  platform: string;
  rank: number;
  repository_license: string;
  repository_url: string;
  stars: number;
  status: null;
  versions: unknown[];
};

export type Library = Pick<
  LibraryModel,
  "name" | "description" | "homepage" | "repository_url" | "stars"
>;
export type Libraries = Library[];
