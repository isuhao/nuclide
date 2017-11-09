'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ThreadsCommand {

  constructor(con, debug) {
    this.name = 'threads';
    this.helpText = "List all of the target's threads.";

    this._console = con;
    this._debugger = debug;
  }

  execute() {
    var _this = this;

    return (0, _asyncToGenerator.default)(function* () {
      const threads = _this._debugger.getThreads();
      const activeThread = _this._debugger.getActiveThread();

      Array.from(threads.keys()).sort(function (left, right) {
        return left - right;
      }).forEach(function (tid) {
        const activeMarker = tid === activeThread ? '*' : ' ';
        _this._console.outputLine(`${activeMarker} ${tid} ${threads.get(tid) || '(thread)'}`);
      });
    })();
  }
}
exports.default = ThreadsCommand; /**
                                   * Copyright (c) 2015-present, Facebook, Inc.
                                   * All rights reserved.
                                   *
                                   * This source code is licensed under the license found in the LICENSE file in
                                   * the root directory of this source tree.
                                   *
                                   * 
                                   * @format
                                   */