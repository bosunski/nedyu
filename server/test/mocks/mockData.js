const mockMeetupDetails = {
    validMeetup : {
        username: 'admin',
        organizer: 'DevFest',
        topic: 'Web Accessibility',
        happeningOn: '12/12/12',
        location: 'Uyo, Akwa Ibom State',
        Tags: ['Tech', 'Edu'],
        images: ['jpeg.png', 'nn.jpg']

    },
    emptyFieldMeetup : {
        id: 1,
    organizer: 'DevFest',
    topic: '',
    happeningOn: '12/12/12',
    location: 'Uyo, Akwa Ibom State',
    Tags: ['Tech', 'Edu'],
    images: ['jpeg.png', 'nn.jpg'],
    createdOn: new Date(),
    },
    createdMeetup : {
    id: 7,
    organizer: 'DevFest',
    topic: 'Web Accessibility',
    happeningOn: '12/12/12',
    location: 'Uyo, Akwa Ibom State',
    Tags: ['Tech', 'Edu'],
    images: ['jpeg.png', 'nn.jpg'],
    createdOn: new Date(),
  },
};

const mockQuestionDetails =  {
  validQuestion :  {
    user : "nedyy",
    meetup: "Web Accessibility",
    title: 'GFW not working?',
    body: 'why is GFW not working when I insert TYF in the config file?'
  },
};

const mockRSVPDetails = {
  validRsvp : {
    status: 'yes'
  },
};

const mockVoteDetails = {
  validVoter : {
    user: 'nedyy'
  }
};

const mockUserDetails = {
  adminUser : {
    id: 1,
    firstname: 'admin',
    lastname: 'admin',
    othername: 'admin',
    email: 'admin@questioner.com',
    phoneNumber: '08025137999',
    username: 'admin',
    password: 'admin',
    registered: new Date(),
    isAdmin: true,
  },
  normalUser : {
    id: 2,
    firstname: 'Nedy',
    lastname: 'Udombat',
    othername: 'Edidiong',
    email: 'nedyudombat@gmail.com',
    phoneNumber: '08025137999',
    username: 'nedyy',
    password: 'qwertyuiop',
    registered: new Date(),
    isAdmin: false,
  },
};

export { mockMeetupDetails, mockQuestionDetails, mockRSVPDetails, mockVoteDetails, mockUserDetails };