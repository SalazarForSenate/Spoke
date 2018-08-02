export const schema = `
  input PeopleFilter {
    campaignsFilter: CampaignsFilter
  }

  type Organization {
    id: ID
    uuid: String
    name: String
    campaigns(campaignsFilter: CampaignsFilter): [Campaign]
    people(role: String): [User]
    optOuts: [OptOut]
    threeClickEnabled: Boolean
    textingHoursEnforced: Boolean
    textingHoursStart: Int
    textingHoursEnd: Int
    osdiLists(osdiListsFilter: OsdiListFilter): [OsdiList]
    osdiQuestions: [String]
    osdiEnabled: Boolean
    osdiApiToken: String
    osdiApiUrl: String
  }
`
