import Link from "next/link";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function BreadcrumbGenerator({
  name,
  trail = [],
}: {
  name: string;
  trail?: {
    link: string;
    name: string;
  }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {trail.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.link}>{item.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          );
        })}
        <BreadcrumbItem>
          <BreadcrumbPage>{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbGenerator;
