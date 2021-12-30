import { useQuery } from "react-query";
import { fetchDevelopers } from "~/API";

function useDevelopers() {
  return useQuery("developers", async () => {
    const params = {
      language: "",
      since: "",
    };
    const { data } = await fetchDevelopers(params);
    return data;
  });
}

export default useDevelopers;
