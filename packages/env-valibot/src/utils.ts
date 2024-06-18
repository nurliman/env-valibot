import type { GenericSchema } from "@valibot/valibot";

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type AnySchema = GenericSchema<any, any>;
