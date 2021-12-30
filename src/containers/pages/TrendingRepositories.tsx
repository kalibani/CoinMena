import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import Commonlayout from "../templates/CommonLayout";
import Repository from "@/Repository";
import Header from "@common/Header";
import { Card, CardHeader, CardBody } from "@common/Card";
import useRepositories from "~/hooks/useRepositories";

const TrendingRepositories: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { data, error, isLoading } = useRepositories();
  return (
    <Commonlayout>
      <>
        <Header content="See what the GitHub community is most excited about today." />
        <Card>
          <CardHeader location={pathname} />
          <CardBody>
            {isLoading ? (
              "Loading..."
            ) : error ? (
              <span>An error has occurred: {error?.message}</span>
            ) : (
              data?.map((repo: Object, index: number) => (
                <Repository key={index} repo={repo} />
              ))
            )}
          </CardBody>
        </Card>
      </>
    </Commonlayout>
  );
};

export default TrendingRepositories;
