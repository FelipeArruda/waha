// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var gows_pb = require('./gows_pb.js');

function serialize_messages_ChatPresenceRequest(arg) {
  if (!(arg instanceof gows_pb.ChatPresenceRequest)) {
    throw new Error('Expected argument of type messages.ChatPresenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_ChatPresenceRequest(buffer_arg) {
  return gows_pb.ChatPresenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_CheckPhonesRequest(arg) {
  if (!(arg instanceof gows_pb.CheckPhonesRequest)) {
    throw new Error('Expected argument of type messages.CheckPhonesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_CheckPhonesRequest(buffer_arg) {
  return gows_pb.CheckPhonesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_CheckPhonesResponse(arg) {
  if (!(arg instanceof gows_pb.CheckPhonesResponse)) {
    throw new Error('Expected argument of type messages.CheckPhonesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_CheckPhonesResponse(buffer_arg) {
  return gows_pb.CheckPhonesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_CreateNewsletterRequest(arg) {
  if (!(arg instanceof gows_pb.CreateNewsletterRequest)) {
    throw new Error('Expected argument of type messages.CreateNewsletterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_CreateNewsletterRequest(buffer_arg) {
  return gows_pb.CreateNewsletterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_DownloadMediaRequest(arg) {
  if (!(arg instanceof gows_pb.DownloadMediaRequest)) {
    throw new Error('Expected argument of type messages.DownloadMediaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_DownloadMediaRequest(buffer_arg) {
  return gows_pb.DownloadMediaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_DownloadMediaResponse(arg) {
  if (!(arg instanceof gows_pb.DownloadMediaResponse)) {
    throw new Error('Expected argument of type messages.DownloadMediaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_DownloadMediaResponse(buffer_arg) {
  return gows_pb.DownloadMediaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_Empty(arg) {
  if (!(arg instanceof gows_pb.Empty)) {
    throw new Error('Expected argument of type messages.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_Empty(buffer_arg) {
  return gows_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_EntityByIdRequest(arg) {
  if (!(arg instanceof gows_pb.EntityByIdRequest)) {
    throw new Error('Expected argument of type messages.EntityByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_EntityByIdRequest(buffer_arg) {
  return gows_pb.EntityByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_EventJson(arg) {
  if (!(arg instanceof gows_pb.EventJson)) {
    throw new Error('Expected argument of type messages.EventJson');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_EventJson(buffer_arg) {
  return gows_pb.EventJson.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_GetChatsRequest(arg) {
  if (!(arg instanceof gows_pb.GetChatsRequest)) {
    throw new Error('Expected argument of type messages.GetChatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_GetChatsRequest(buffer_arg) {
  return gows_pb.GetChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_GetContactsRequest(arg) {
  if (!(arg instanceof gows_pb.GetContactsRequest)) {
    throw new Error('Expected argument of type messages.GetContactsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_GetContactsRequest(buffer_arg) {
  return gows_pb.GetContactsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_GetMessagesRequest(arg) {
  if (!(arg instanceof gows_pb.GetMessagesRequest)) {
    throw new Error('Expected argument of type messages.GetMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_GetMessagesRequest(buffer_arg) {
  return gows_pb.GetMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_GetNewsletterMessagesByInviteRequest(arg) {
  if (!(arg instanceof gows_pb.GetNewsletterMessagesByInviteRequest)) {
    throw new Error('Expected argument of type messages.GetNewsletterMessagesByInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_GetNewsletterMessagesByInviteRequest(buffer_arg) {
  return gows_pb.GetNewsletterMessagesByInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_Json(arg) {
  if (!(arg instanceof gows_pb.Json)) {
    throw new Error('Expected argument of type messages.Json');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_Json(buffer_arg) {
  return gows_pb.Json.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_JsonList(arg) {
  if (!(arg instanceof gows_pb.JsonList)) {
    throw new Error('Expected argument of type messages.JsonList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_JsonList(buffer_arg) {
  return gows_pb.JsonList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_MarkReadRequest(arg) {
  if (!(arg instanceof gows_pb.MarkReadRequest)) {
    throw new Error('Expected argument of type messages.MarkReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_MarkReadRequest(buffer_arg) {
  return gows_pb.MarkReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_MessageReaction(arg) {
  if (!(arg instanceof gows_pb.MessageReaction)) {
    throw new Error('Expected argument of type messages.MessageReaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_MessageReaction(buffer_arg) {
  return gows_pb.MessageReaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_MessageRequest(arg) {
  if (!(arg instanceof gows_pb.MessageRequest)) {
    throw new Error('Expected argument of type messages.MessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_MessageRequest(buffer_arg) {
  return gows_pb.MessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_MessageResponse(arg) {
  if (!(arg instanceof gows_pb.MessageResponse)) {
    throw new Error('Expected argument of type messages.MessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_MessageResponse(buffer_arg) {
  return gows_pb.MessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_Newsletter(arg) {
  if (!(arg instanceof gows_pb.Newsletter)) {
    throw new Error('Expected argument of type messages.Newsletter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_Newsletter(buffer_arg) {
  return gows_pb.Newsletter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_NewsletterInfoRequest(arg) {
  if (!(arg instanceof gows_pb.NewsletterInfoRequest)) {
    throw new Error('Expected argument of type messages.NewsletterInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_NewsletterInfoRequest(buffer_arg) {
  return gows_pb.NewsletterInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_NewsletterList(arg) {
  if (!(arg instanceof gows_pb.NewsletterList)) {
    throw new Error('Expected argument of type messages.NewsletterList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_NewsletterList(buffer_arg) {
  return gows_pb.NewsletterList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_NewsletterListRequest(arg) {
  if (!(arg instanceof gows_pb.NewsletterListRequest)) {
    throw new Error('Expected argument of type messages.NewsletterListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_NewsletterListRequest(buffer_arg) {
  return gows_pb.NewsletterListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_NewsletterSearchPageResult(arg) {
  if (!(arg instanceof gows_pb.NewsletterSearchPageResult)) {
    throw new Error('Expected argument of type messages.NewsletterSearchPageResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_NewsletterSearchPageResult(buffer_arg) {
  return gows_pb.NewsletterSearchPageResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_NewsletterToggleFollowRequest(arg) {
  if (!(arg instanceof gows_pb.NewsletterToggleFollowRequest)) {
    throw new Error('Expected argument of type messages.NewsletterToggleFollowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_NewsletterToggleFollowRequest(buffer_arg) {
  return gows_pb.NewsletterToggleFollowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_NewsletterToggleMuteRequest(arg) {
  if (!(arg instanceof gows_pb.NewsletterToggleMuteRequest)) {
    throw new Error('Expected argument of type messages.NewsletterToggleMuteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_NewsletterToggleMuteRequest(buffer_arg) {
  return gows_pb.NewsletterToggleMuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_PairCodeRequest(arg) {
  if (!(arg instanceof gows_pb.PairCodeRequest)) {
    throw new Error('Expected argument of type messages.PairCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_PairCodeRequest(buffer_arg) {
  return gows_pb.PairCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_PairCodeResponse(arg) {
  if (!(arg instanceof gows_pb.PairCodeResponse)) {
    throw new Error('Expected argument of type messages.PairCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_PairCodeResponse(buffer_arg) {
  return gows_pb.PairCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_PresenceRequest(arg) {
  if (!(arg instanceof gows_pb.PresenceRequest)) {
    throw new Error('Expected argument of type messages.PresenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_PresenceRequest(buffer_arg) {
  return gows_pb.PresenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_ProfilePictureRequest(arg) {
  if (!(arg instanceof gows_pb.ProfilePictureRequest)) {
    throw new Error('Expected argument of type messages.ProfilePictureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_ProfilePictureRequest(buffer_arg) {
  return gows_pb.ProfilePictureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_ProfilePictureResponse(arg) {
  if (!(arg instanceof gows_pb.ProfilePictureResponse)) {
    throw new Error('Expected argument of type messages.ProfilePictureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_ProfilePictureResponse(buffer_arg) {
  return gows_pb.ProfilePictureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_SearchNewslettersByTextRequest(arg) {
  if (!(arg instanceof gows_pb.SearchNewslettersByTextRequest)) {
    throw new Error('Expected argument of type messages.SearchNewslettersByTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_SearchNewslettersByTextRequest(buffer_arg) {
  return gows_pb.SearchNewslettersByTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_SearchNewslettersByViewRequest(arg) {
  if (!(arg instanceof gows_pb.SearchNewslettersByViewRequest)) {
    throw new Error('Expected argument of type messages.SearchNewslettersByViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_SearchNewslettersByViewRequest(buffer_arg) {
  return gows_pb.SearchNewslettersByViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_Session(arg) {
  if (!(arg instanceof gows_pb.Session)) {
    throw new Error('Expected argument of type messages.Session');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_Session(buffer_arg) {
  return gows_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_SessionStateResponse(arg) {
  if (!(arg instanceof gows_pb.SessionStateResponse)) {
    throw new Error('Expected argument of type messages.SessionStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_SessionStateResponse(buffer_arg) {
  return gows_pb.SessionStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_StartSessionRequest(arg) {
  if (!(arg instanceof gows_pb.StartSessionRequest)) {
    throw new Error('Expected argument of type messages.StartSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_StartSessionRequest(buffer_arg) {
  return gows_pb.StartSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_messages_SubscribePresenceRequest(arg) {
  if (!(arg instanceof gows_pb.SubscribePresenceRequest)) {
    throw new Error('Expected argument of type messages.SubscribePresenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_messages_SubscribePresenceRequest(buffer_arg) {
  return gows_pb.SubscribePresenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Events
//
var EventStreamService = exports.EventStreamService = {
  streamEvents: {
    path: '/messages.EventStream/StreamEvents',
    requestStream: false,
    responseStream: true,
    requestType: gows_pb.Session,
    responseType: gows_pb.EventJson,
    requestSerialize: serialize_messages_Session,
    requestDeserialize: deserialize_messages_Session,
    responseSerialize: serialize_messages_EventJson,
    responseDeserialize: deserialize_messages_EventJson,
  },
};

exports.EventStreamClient = grpc.makeGenericClientConstructor(EventStreamService);
var MessageServiceService = exports.MessageServiceService = {
  //
// Session management
//
startSession: {
    path: '/messages.MessageService/StartSession',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.StartSessionRequest,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_StartSessionRequest,
    requestDeserialize: deserialize_messages_StartSessionRequest,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  stopSession: {
    path: '/messages.MessageService/StopSession',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.Session,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_Session,
    requestDeserialize: deserialize_messages_Session,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  getSessionState: {
    path: '/messages.MessageService/GetSessionState',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.Session,
    responseType: gows_pb.SessionStateResponse,
    requestSerialize: serialize_messages_Session,
    requestDeserialize: deserialize_messages_Session,
    responseSerialize: serialize_messages_SessionStateResponse,
    responseDeserialize: deserialize_messages_SessionStateResponse,
  },
  requestCode: {
    path: '/messages.MessageService/RequestCode',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.PairCodeRequest,
    responseType: gows_pb.PairCodeResponse,
    requestSerialize: serialize_messages_PairCodeRequest,
    requestDeserialize: deserialize_messages_PairCodeRequest,
    responseSerialize: serialize_messages_PairCodeResponse,
    responseDeserialize: deserialize_messages_PairCodeResponse,
  },
  logout: {
    path: '/messages.MessageService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.Session,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_Session,
    requestDeserialize: deserialize_messages_Session,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  //
// Actions
//
sendMessage: {
    path: '/messages.MessageService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.MessageRequest,
    responseType: gows_pb.MessageResponse,
    requestSerialize: serialize_messages_MessageRequest,
    requestDeserialize: deserialize_messages_MessageRequest,
    responseSerialize: serialize_messages_MessageResponse,
    responseDeserialize: deserialize_messages_MessageResponse,
  },
  sendReaction: {
    path: '/messages.MessageService/SendReaction',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.MessageReaction,
    responseType: gows_pb.MessageResponse,
    requestSerialize: serialize_messages_MessageReaction,
    requestDeserialize: deserialize_messages_MessageReaction,
    responseSerialize: serialize_messages_MessageResponse,
    responseDeserialize: deserialize_messages_MessageResponse,
  },
  getProfilePicture: {
    path: '/messages.MessageService/GetProfilePicture',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.ProfilePictureRequest,
    responseType: gows_pb.ProfilePictureResponse,
    requestSerialize: serialize_messages_ProfilePictureRequest,
    requestDeserialize: deserialize_messages_ProfilePictureRequest,
    responseSerialize: serialize_messages_ProfilePictureResponse,
    responseDeserialize: deserialize_messages_ProfilePictureResponse,
  },
  sendPresence: {
    path: '/messages.MessageService/SendPresence',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.PresenceRequest,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_PresenceRequest,
    requestDeserialize: deserialize_messages_PresenceRequest,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  sendChatPresence: {
    path: '/messages.MessageService/SendChatPresence',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.ChatPresenceRequest,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_ChatPresenceRequest,
    requestDeserialize: deserialize_messages_ChatPresenceRequest,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  subscribePresence: {
    path: '/messages.MessageService/SubscribePresence',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.SubscribePresenceRequest,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_SubscribePresenceRequest,
    requestDeserialize: deserialize_messages_SubscribePresenceRequest,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  markRead: {
    path: '/messages.MessageService/MarkRead',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.MarkReadRequest,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_MarkReadRequest,
    requestDeserialize: deserialize_messages_MarkReadRequest,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  checkPhones: {
    path: '/messages.MessageService/CheckPhones',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.CheckPhonesRequest,
    responseType: gows_pb.CheckPhonesResponse,
    requestSerialize: serialize_messages_CheckPhonesRequest,
    requestDeserialize: deserialize_messages_CheckPhonesRequest,
    responseSerialize: serialize_messages_CheckPhonesResponse,
    responseDeserialize: deserialize_messages_CheckPhonesResponse,
  },
  //
// Newsletters
//
getSubscribedNewsletters: {
    path: '/messages.MessageService/GetSubscribedNewsletters',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.NewsletterListRequest,
    responseType: gows_pb.NewsletterList,
    requestSerialize: serialize_messages_NewsletterListRequest,
    requestDeserialize: deserialize_messages_NewsletterListRequest,
    responseSerialize: serialize_messages_NewsletterList,
    responseDeserialize: deserialize_messages_NewsletterList,
  },
  getNewsletterInfo: {
    path: '/messages.MessageService/GetNewsletterInfo',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.NewsletterInfoRequest,
    responseType: gows_pb.Newsletter,
    requestSerialize: serialize_messages_NewsletterInfoRequest,
    requestDeserialize: deserialize_messages_NewsletterInfoRequest,
    responseSerialize: serialize_messages_Newsletter,
    responseDeserialize: deserialize_messages_Newsletter,
  },
  getNewsletterMessagesByInvite: {
    path: '/messages.MessageService/GetNewsletterMessagesByInvite',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.GetNewsletterMessagesByInviteRequest,
    responseType: gows_pb.Json,
    requestSerialize: serialize_messages_GetNewsletterMessagesByInviteRequest,
    requestDeserialize: deserialize_messages_GetNewsletterMessagesByInviteRequest,
    responseSerialize: serialize_messages_Json,
    responseDeserialize: deserialize_messages_Json,
  },
  searchNewslettersByView: {
    path: '/messages.MessageService/SearchNewslettersByView',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.SearchNewslettersByViewRequest,
    responseType: gows_pb.NewsletterSearchPageResult,
    requestSerialize: serialize_messages_SearchNewslettersByViewRequest,
    requestDeserialize: deserialize_messages_SearchNewslettersByViewRequest,
    responseSerialize: serialize_messages_NewsletterSearchPageResult,
    responseDeserialize: deserialize_messages_NewsletterSearchPageResult,
  },
  searchNewslettersByText: {
    path: '/messages.MessageService/SearchNewslettersByText',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.SearchNewslettersByTextRequest,
    responseType: gows_pb.NewsletterSearchPageResult,
    requestSerialize: serialize_messages_SearchNewslettersByTextRequest,
    requestDeserialize: deserialize_messages_SearchNewslettersByTextRequest,
    responseSerialize: serialize_messages_NewsletterSearchPageResult,
    responseDeserialize: deserialize_messages_NewsletterSearchPageResult,
  },
  createNewsletter: {
    path: '/messages.MessageService/CreateNewsletter',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.CreateNewsletterRequest,
    responseType: gows_pb.Newsletter,
    requestSerialize: serialize_messages_CreateNewsletterRequest,
    requestDeserialize: deserialize_messages_CreateNewsletterRequest,
    responseSerialize: serialize_messages_Newsletter,
    responseDeserialize: deserialize_messages_Newsletter,
  },
  newsletterToggleMute: {
    path: '/messages.MessageService/NewsletterToggleMute',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.NewsletterToggleMuteRequest,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_NewsletterToggleMuteRequest,
    requestDeserialize: deserialize_messages_NewsletterToggleMuteRequest,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  newsletterToggleFollow: {
    path: '/messages.MessageService/NewsletterToggleFollow',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.NewsletterToggleFollowRequest,
    responseType: gows_pb.Empty,
    requestSerialize: serialize_messages_NewsletterToggleFollowRequest,
    requestDeserialize: deserialize_messages_NewsletterToggleFollowRequest,
    responseSerialize: serialize_messages_Empty,
    responseDeserialize: deserialize_messages_Empty,
  },
  //
// Media
//
downloadMedia: {
    path: '/messages.MessageService/DownloadMedia',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.DownloadMediaRequest,
    responseType: gows_pb.DownloadMediaResponse,
    requestSerialize: serialize_messages_DownloadMediaRequest,
    requestDeserialize: deserialize_messages_DownloadMediaRequest,
    responseSerialize: serialize_messages_DownloadMediaResponse,
    responseDeserialize: deserialize_messages_DownloadMediaResponse,
  },
  //
// Storage
//
getMessageById: {
    path: '/messages.MessageService/GetMessageById',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.EntityByIdRequest,
    responseType: gows_pb.Json,
    requestSerialize: serialize_messages_EntityByIdRequest,
    requestDeserialize: deserialize_messages_EntityByIdRequest,
    responseSerialize: serialize_messages_Json,
    responseDeserialize: deserialize_messages_Json,
  },
  getMessages: {
    path: '/messages.MessageService/GetMessages',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.GetMessagesRequest,
    responseType: gows_pb.JsonList,
    requestSerialize: serialize_messages_GetMessagesRequest,
    requestDeserialize: deserialize_messages_GetMessagesRequest,
    responseSerialize: serialize_messages_JsonList,
    responseDeserialize: deserialize_messages_JsonList,
  },
  getContacts: {
    path: '/messages.MessageService/GetContacts',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.GetContactsRequest,
    responseType: gows_pb.JsonList,
    requestSerialize: serialize_messages_GetContactsRequest,
    requestDeserialize: deserialize_messages_GetContactsRequest,
    responseSerialize: serialize_messages_JsonList,
    responseDeserialize: deserialize_messages_JsonList,
  },
  getContactById: {
    path: '/messages.MessageService/GetContactById',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.EntityByIdRequest,
    responseType: gows_pb.Json,
    requestSerialize: serialize_messages_EntityByIdRequest,
    requestDeserialize: deserialize_messages_EntityByIdRequest,
    responseSerialize: serialize_messages_Json,
    responseDeserialize: deserialize_messages_Json,
  },
  getChats: {
    path: '/messages.MessageService/GetChats',
    requestStream: false,
    responseStream: false,
    requestType: gows_pb.GetChatsRequest,
    responseType: gows_pb.JsonList,
    requestSerialize: serialize_messages_GetChatsRequest,
    requestDeserialize: deserialize_messages_GetChatsRequest,
    responseSerialize: serialize_messages_JsonList,
    responseDeserialize: deserialize_messages_JsonList,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
