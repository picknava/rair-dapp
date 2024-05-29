const mongoose = require('mongoose');

const Contract = require('./contract');
const File = require('./file');
const User = require('./user');
const Product = require('./product');
const OfferPool = require('./offerPool');
const Offer = require('./offer');
const MintedToken = require('./mintedToken');
const LockedTokens = require('./lockedTokens');
const Versioning = require('./versioning');
const Blockchain = require('./blockchain');
const Category = require('./category');
const SyncRestriction = require('./syncRestriction');
const Transaction = require('./transaction');
const CustomRoyaltiesSet = require('./customRoyaltiesSet');
const ResaleTokenOffer = require('./resaleTokenOffer');
const FavoriteTokens = require('./favoriteTokens');
const MediaViewLog = require('./mediaViewLog');
const UserCredit = require('./userCredit');
const UserCreditMovement = require('./userCreditMovement');
const ServerSetting = require('./serverSettings');
const Unlock = require('./unlock');
const TokenMetadata = require('./tokenMetadata');

module.exports = {
  Contract: mongoose.model('Contract', Contract, 'Contract'),
  File: mongoose.model('File', File, 'File'),
  User: mongoose.model('User', User, 'User'),
  Product: mongoose.model('Product', Product, 'Product'),
  OfferPool: mongoose.model('OfferPool', OfferPool, 'OfferPool'),
  Offer: mongoose.model('Offer', Offer, 'Offer'),
  MintedToken: mongoose.model('MintedToken', MintedToken, 'MintedToken'),
  LockedTokens: mongoose.model('LockedTokens', LockedTokens, 'LockedTokens'),
  Versioning: mongoose.model('Versioning', Versioning, 'Versioning'),
  Blockchain: mongoose.model('Blockchain', Blockchain, 'Blockchain'),
  Category: mongoose.model('Category', Category, 'Category'),
  SyncRestriction: mongoose.model('SyncRestriction', SyncRestriction, 'SyncRestriction'),
  Transaction: mongoose.model('Transaction', Transaction, 'Transaction'),
  CustomRoyaltiesSet: mongoose.model('CustomRoyaltiesSet', CustomRoyaltiesSet, 'CustomRoyaltiesSet'),
  ResaleTokenOffer: mongoose.model('ResaleTokenOffer', ResaleTokenOffer, 'ResaleTokenOffer'),
  FavoriteTokens: mongoose.model('FavoriteTokens', FavoriteTokens, 'FavoriteTokens'),
  MediaViewLog: mongoose.model('MediaViewLog', MediaViewLog, 'MediaViewLog'),
  UserCredit: mongoose.model('UserCredit', UserCredit, 'UserCredit'),
  UserCreditMovement: mongoose.model('UserCreditMovement', UserCreditMovement, 'UserCreditMovement'),
  ServerSetting: mongoose.model('ServerSetting', ServerSetting, 'ServerSetting'),
  Unlock: mongoose.model('Unlock', Unlock, 'Unlock'),
  TokenMetadata: mongoose.model('TokenMetadata', TokenMetadata, 'TokenMetadata'),
};