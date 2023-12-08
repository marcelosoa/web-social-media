export interface Validation {
  validate: (input: Record<string, string>) => Record<string, string>
}
