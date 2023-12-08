export interface FieldValidator {
  field: string
  validate: (input: Record<string, string>) => Error | null
}
