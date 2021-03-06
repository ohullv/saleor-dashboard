import { webhookErrorFragment } from "@saleor/fragments/errors";
import { webhooksDetailsFragment } from "@saleor/fragments/webhooks";
import gql from "graphql-tag";

import { TypedMutation } from "../mutations";
import { WebhookCreate, WebhookCreateVariables } from "./types/WebhookCreate";
import { WebhookDelete, WebhookDeleteVariables } from "./types/WebhookDelete";
import { WebhookUpdate, WebhookUpdateVariables } from "./types/WebhookUpdate";

const webhookCreate = gql`
  ${webhooksDetailsFragment}
  ${webhookErrorFragment}
  mutation WebhookCreate($input: WebhookCreateInput!) {
    webhookCreate(input: $input) {
      errors: webhookErrors {
        ...WebhookErrorFragment
      }
      webhook {
        ...WebhooksDetailsFragment
      }
    }
  }
`;
export const TypedWebhookCreate = TypedMutation<
  WebhookCreate,
  WebhookCreateVariables
>(webhookCreate);

const webhookUpdate = gql`
  ${webhooksDetailsFragment}
  ${webhookErrorFragment}
  mutation WebhookUpdate($id: ID!, $input: WebhookUpdateInput!) {
    webhookUpdate(id: $id, input: $input) {
      errors: webhookErrors {
        ...WebhookErrorFragment
      }
      webhook {
        ...WebhooksDetailsFragment
      }
    }
  }
`;
export const TypedWebhookUpdate = TypedMutation<
  WebhookUpdate,
  WebhookUpdateVariables
>(webhookUpdate);

const webhookDelete = gql`
  ${webhookErrorFragment}
  mutation WebhookDelete($id: ID!) {
    webhookDelete(id: $id) {
      errors: webhookErrors {
        ...WebhookErrorFragment
      }
    }
  }
`;
export const TypedWebhookDelete = TypedMutation<
  WebhookDelete,
  WebhookDeleteVariables
>(webhookDelete);
