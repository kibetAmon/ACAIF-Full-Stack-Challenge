export class CreateInfluencerDto {
    readonly name: string;
    readonly email: string;
    readonly campaigns?: string[];  // Array of campaign IDs (optional)
  }