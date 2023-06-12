export interface IProfile {
  id: string;
  icon: string;
  context: string;
  helpContext: string;
  url: string;
}

export class Profile {
  id = "";
  icon = "";
  context = "";
  helpContext = "";
  url = "";
  constructor(profile: IProfile) {
    this.id = profile.id;
    this.icon = profile.icon;
    this.context = profile.context;
    this.helpContext = profile.helpContext;
    this.url = profile.url;
  }
}
