export class ModelTeamMembers {

  constructor(public team: string,
              public memberID: number,
              public memberName: string,
              public memberState: string,
              public memberCity: string,
              public memberLocation: string,
              public memberTitle: string,){ }
}
