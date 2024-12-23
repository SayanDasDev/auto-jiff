import React from "react";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import BreadcrumbGenerator from "@/components/shared/breadcrumb-generator";

export default function HomePage() {
  return (
    <ContentLayout title="Dashboard">
      <BreadcrumbGenerator
        name="Dashboard"
      />

    </ContentLayout>
  );
}
