import { useQuery } from "react-query";
import { fetchRepositories } from "~/API";

function useRepositories() {
  return useQuery("repositories", async () => {
    const params = {
      language: "",
      since: "",
    };
    const { data } = await fetchRepositories(params);
    return data;
  });
}

export default useRepositories;
