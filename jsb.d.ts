/// <reference path="cocos2d-lib.d.ts" />
 
 
/**
 * The namespace for jsb exclusive APIs, all APIs in this namespace should never be used in Web engine.
 * So please check whether the running environment is native or not before any usage.
 * @namespace
 * @name jsb
 * @example
 *
 * if(cc.sys.isNative) {
 *     cc.log(cc.fileUtils.fullPathForFilename("test.js"));
 * }
 */
declare namespace jsb {
    // TODO: This is probably a bad idea to declare these as enums (since they clearly are not TS enums), but let's try it out and at least see if the values resolve properly
    export enum DiffType {
        ADDED,
        DELETED,
        MODIFIED
    }
 
    export enum DownloadState {
        UNSTARTED,
        DOWNLOADING,
        SUCCESSED
    }
 
    export enum ErrorCode {
        CREATE_FILE,
        NETWORK,
        NO_NEW_VERSION,
        UNCOMPRESS
    }
 
 
 
    /**
     * ATTENTION: USE jsb.fileUtils INSTEAD OF jsb.FileUtils.
     * jsb.fileUtils is the native file utils' singleton object,
     * please refer to Cocos2d-x's API to know how to use it.
     * Only available in JSB
     * @class
     * @name jsb.fileUtils
     * @extend cc.Class
     */
    //jsb.fileUtils = /** @lends jsb.fileUtils# */{
    export const fileUtils: FileUtils;
 
    export class FileUtils {
 
        /**
         * @function fullPathForFilename
         * @param {String} filename
         * @return {String}
         */
        public fullPathForFilename(filename: string): string;
 
        /**
         * @function getStringFromFile
         * @param {String} filename
         * @return {String}
         */
        public getStringFromFile(filename: string): string;
 
        /**
         * @function removeFile
         * @param {String} filepath
         * @return {boolean}
         */
        public removeFile(filepath: string): boolean;
 
        /**
         * @function isAbsolutePath
         * @param {String} path
         * @return {boolean}
         */
        public isAbsolutePath(path: string): boolean;
 
        /**
         * @function renameFile
         * @param {String} path or old full path
         * @param {String} oldname or new full path
         * @param {String} [name] new name
         * @return {boolean}
         */
        public renameFile(path: string, oldname: string, name?: string): boolean;
 
        /**
         * @function loadFilenameLookupDictionaryFromFile
         * @param {String} filename
         */
        public loadFilenameLookupDictionaryFromFile(filename: string): void;
 
        /**
         * @function isPopupNotify
         * @return {boolean}
         */
        public isPopupNotify(): boolean;
 
        /**
         * @function getValueVectorFromFile
         * @param {String} arg0
         * @return {Array}
         * TODO: Figure out exactly what data type this is, not quite sure yet and this isn't in the C++ FileUtils API docs...
         */
        public getValueVectorFromFile(arg0: string): any[];
 
        /**
         * @function getSearchPaths
         * @return {Array}
         */
        public getSearchPaths(): string[];
 
        /**
         * @function writeToFile
         * @param {{}} dict
         * @param {String} fullPath
         * @return {boolean}
         */
        public writeToFile(dict: {}, fullPath: string): boolean;
 
        /**
         * @function getValueMapFromFile
         * @param {String} filename
         * @return {{}}
         */
        public getValueMapFromFile(filename: string): {};
 
        /**
         * @function getFileSize
         * @param {String} filepath
         * @return {number}
         */
        public getFileSize(filepath: string): number;
 
        /**
         * @function removeDirectory
         * @param {String} dirPath
         * @return {boolean}
         */
        public removeDirectory(dirPath: string): boolean;
 
        /**
         * @function setSearchPaths
         * @param {Array} searchPaths
         */
        public setSearchPaths(searchPaths: string[]): void;
 
        /**
         * @function writeStringToFile
         * @param {String} dataStr
         * @param {String} fullPath
         * @return {boolean}
         */
        public writeStringToFile(dataStr: string, fullPath: string): boolean;
 
        /**
         * @function setSearchResolutionsOrder
         * @param {Array} searchResolutionsOrder
         */
        public setSearchResolutionsOrder(searchResolutionsOrder: string[]): void;
 
        /**
         * @function addSearchResolutionsOrder
         * @param {String} order
         * TODO: This does not match the C++ API, expected an optional bool argument here
         */
        public addSearchResolutionsOrder(order: string): void;
 
        /**
         * @function addSearchPath
         * @param {String} path
         * TODO: This does not match the C++ API, expected an optional bool argument here
         */
        public addSearchPath(path: string): void;
 
        /**
         * @function isFileExist
         * @param {String} filename
         * @return {boolean}
         */
        public isFileExist(filename: string): boolean;
 
        /**
         * @function purgeCachedEntries
         */
        public purgeCachedEntries(): void;
 
        /**
         * @function fullPathFromRelativeFile
         * @param {String} filename
         * @param {String} relativeFile
         * @return {String}
         */
        public fullPathFromRelativeFile(filename: string, relativeFile: string): string;
 
        /**
         * @function isDirectoryExist
         * @param {String} dirPath
         * @return {boolean}
         */
        public isDirectoryExist(dirPath: string): boolean;
 
        /**
         * @function getSearchResolutionsOrder
         * @return {Array}
         */
        public getSearchResolutionsOrder(): string[];
 
        /**
         * @function createDirectory
         * @param {String} dirPath
         * @return {boolean}
         */
        public createDirectory(dirPath: string): boolean;
 
        /**
         * @function createDirectories
         * @param {String} dirPath
         * @return {boolean}
         * TODO: This arguments list doesn't even make sense, I'd expect an array of strings. Look into this later on.
         */
        public createDirectories(dirPath: string): boolean;
 
        /**
         * @function getWritablePath
         * @return {String}
         */
        public getWritablePath(): string;
    }
 
    /**
     * @class
     */
    //jsb.EventAssetsManager = cc.Class.extend(/** @lends jsb.EventAssetsManager# */{
    export class EventAssetsManager extends cc.Class {
        /**
         * zhufu
         */
        static ERROR_NO_LOCAL_MANIFEST: number;
        static ERROR_DOWNLOAD_MANIFEST: number;
        static ERROR_PARSE_MANIFEST: number;
        static NEW_VERSION_FOUND: number;
        static ALREADY_UP_TO_DATE: number;
        static UPDATE_PROGRESSION: number;
        static ASSET_UPDATED: number;
        static ERROR_UPDATING: number;
        static UPDATE_FINISHED: number;
        static UPDATE_FAILED: number;
        static ERROR_DECOMPRESS: number;
 
 
        /**
         * @function EventAssetsManager
         * @constructor
         * @param {String} eventName
         * @param {AssetsManager} manager
         * @param {EventCode} code
         * @param {number} [percent]
         * @param {number} [percentByFile]
         * @param {String} [assetId]
         * @param {String} [message]
         * @param {number} [curle_code]
         * @param {number} [curlm_code]
         */
        public constructor(
            eventName: string,
            manager: AssetsManager,
            code: EventCode,
            percent?: number,
            percentByFile?: number,
            assetId?: string,
            message?: string,
            curle_code?: number,
            curlm_code?: number);
 
        /**
         * zhufu
         */
        public getDownloadedFiles(): number;
 
        /**
         * zhufu
         */
        public getTotalFiles(): number;
 
        /**
         * zhufu
         */
        public getDownloadedBytes(): number;
        /**
         * zhufu
         */
        public getTotalBytes(): number;
 
        /**
         * @function getAssetsManager
         * @return {AssetsManager}
         */
        public getAssetsManager(): AssetsManager;
 
        /**
         * @function getAssetId
         * @return {String}
         */
        public getAssetId(): string;
 
        /**
         * @function getCURLECode
         * @return {int}
         */
        public getCURLECode(): number;
 
        /**
         * @function getMessage
         * @return {String}
         */
        public getMessage(): string;
 
        /**
         * @function getCURLMCode
         * @return {int}
         */
        public getCURLMCode(): number;
 
        /**
         * @function getPercentByFile
         * @return {number}
         */
        public getPercentByFile(): number;
 
        /**
         * @function getEventCode
         * @return {EventCode}
         */
        public getEventCode(): EventCode;
 
        /**
         * @function getPercent
         * @return {number}
         */
        public getPercent(): number;
 
    }
 
    /**
     * @class
     */
    export class EventListenerAssetsManager extends cc.Class {
        /**
         * @function init
         * @param {AssetsManager} assetsmanager
         * @param {function} callback
         * @return {boolean}
         */
        public init(assetsmanager: AssetsManager, callback: (mgr: EventAssetsManager) => void): boolean;
 
        /**
         * @function create
         * @param {AssetsManager} assetsmanager
         * @param {function} callback
         * @return {EventListenerAssetsManager}
         */
        public create(assetsmanager: AssetsManager, callback: (mgr: EventAssetsManager) => void): EventListenerAssetsManager;
    }
 
    /**
     * zhufu
     */
    export namespace AssetsManager {
        export enum State {
            UNINITED,
            UNCHECKED,
            PREDOWNLOAD_VERSION,
            DOWNLOADING_VERSION,
            VERSION_LOADED,
            PREDOWNLOAD_MANIFEST,
            DOWNLOADING_MANIFEST,
            MANIFEST_LOADED,
            NEED_UPDATE,
            READY_TO_UPDATE,
            UPDATING,
            UNZIPPING,
            UP_TO_DATE,
            FAIL_TO_UPDATE
        };
    }
 
    /**
     * @class
     * jsb.AssetsManager is the native AssetsManager for your game resources or scripts.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/en
     * Only available in JSB
     */
    export class AssetsManager extends cc.Class {
 
        /**
         * zhufu
         * @param name 
         * @param path 
         * @param callback 
         */
        constructor(name?: string, path?: string, callback?: (versionA: string, versionB: string) => void);
 
        /**
         * zhufu
         * @param maxTask 
         */
        public setMaxConcurrentTask(maxTask: number): void;
 
        /**
         * zhufu
         * @param callback 
         */
        public setEventCallback(callback: (event: EventAssetsManager) => void): void;
 
        /**
         * zhufu
         * @param manifest 
         * @param storagePath 
         */
        public loadLocalManifest(manifest: any, storagePath?: string): void;
 
        public setVerifyCallback(callback: (path: string, asset: any) => void): void;
 
        /**
         * @function getState
         * @return {State}
         */
        public getState(): State;
 
        /**
         * @function checkUpdate
         */
        public checkUpdate(): void;
 
        /**
         * @function getStoragePath
         * @return {String}
         */
        public getStoragePath(): string;
 
        /**
         * @function update
         */
        public update(): void;
 
        /**
         * @function getLocalManifest
         * @return {jsb.Manifest}
         */
        public getLocalManifest(): Manifest;
 
        /**
         * @function getRemoteManifest
         * @return {jsb.Manifest}
         */
        public getRemoteManifest(): Manifest;
 
        /**
         * @function downloadFailedAssets
         */
        public downloadFailedAssets(): void;
 
        /**
         * @function create
         * @param {String} manifestUrl
         * @param {String} storagePath
         * @return {jsb.AssetsManager}
         */
        public create(manifestUrl: string, storagePath: string): AssetsManager;
 
        /**
         * @function AssetsManager
         * @constructor
         * @param {String} manifestUrl
         * @param {String} storagePath
         */
        public ctor(manifestUrl: string, storagePath: string): void;
        public ctor(): void;
    }
 
    /**
     * @class
     */
    export class Manifest extends cc.Class {
 
        /**
         * zhufu
         */
        public getSearchPaths(): string;
 
        /**
         * @function getManifestFileUrl
         * @return {String}
         */
        public getManifestFileUrl(): string;
 
        /**
         * @function isVersionLoaded
         * @return {boolean}
         */
        public isVersionLoaded(): boolean;
 
        /**
         * @function isLoaded
         * @return {boolean}
         */
        public isLoaded(): boolean;
 
        /**
         * @function getPackageUrl
         * @return {String}
         */
        public getPackageUrl(): string;
 
        /**
         * @function getVersion
         * @return {String}
         */
        public getVersion(): string;
 
        /**
         * @function getVersionFileUrl
         * @return {String}
         */
        public getVersionFileUrl(): string;
    }
 
    // TODO: I don't know the best way to represent this, because I can't find a reference in the C++ docs. Just do this for now, fix it later on.
    /**
     * jsb.reflection is a bridge to let you invoke Java static functions.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection/en
     * Only available on iOS/Mac/Android platform
     * @class
     * @name jsb.reflection
     */
    export namespace reflection {
        /**
         * @function
         */
        export function callStaticMethod(): void;
    }
}