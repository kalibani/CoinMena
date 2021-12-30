import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import Commonlayout from "../templates/CommonLayout";
import Developer from "@/Developer";
import Header from "@common/Header";
import { Card, CardHeader, CardBody } from "@common/Card";
import useDevelopers from "~/hooks/useDevelopers";

const TrendingDevelopers: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { data, error, isLoading } = useDevelopers();
  return (
    <Commonlayout>
      <>
        <Header content="These are the developers building the hot tools today." />
        <Card>
          <CardHeader location={pathname} />
          <CardBody>
            {isLoading ? (
              "Loading..."
            ) : error ? (
              <span>An error has occurred: {error?.message}</span>
            ) : (
              data?.map((developer: Object, index: number) => (
                <Developer key={index} index={index} developer={developer} />
              ))
            )}
          </CardBody>
        </Card>
      </>
    </Commonlayout>
  );
};

export default TrendingDevelopers;
