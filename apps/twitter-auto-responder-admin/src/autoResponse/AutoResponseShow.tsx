import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TREND_TITLE_FIELD } from "../trend/TrendTitle";
import { TWITTERACCOUNT_TITLE_FIELD } from "../twitterAccount/TwitterAccountTitle";

export const AutoResponseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="aiResponse" source="aiResponse" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="mediaUrl" source="mediaUrl" />
        <ReferenceField label="Trend" source="trend.id" reference="Trend">
          <TextField source={TREND_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="TwitterAccount"
          source="twitteraccount.id"
          reference="TwitterAccount"
        >
          <TextField source={TWITTERACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};