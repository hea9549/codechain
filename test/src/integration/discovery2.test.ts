// Copyright 2018 Kodebox, Inc.
// This file is part of CodeChain.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import CodeChain from "../helper/spawn";

const testSkippedInTravis = process.env.TRAVIS ? test.skip : test;

describe("discovery2 nodes", () => {
    let nodeA: CodeChain;
    let nodeB: CodeChain;

    beforeEach(async () => {
        nodeA = new CodeChain();
        nodeB = new CodeChain();
        await Promise.all([nodeA.start(), nodeB.start()]);
    });

    // FIXME: Connection establishment is too slow.
    // See https://github.com/CodeChain-io/codechain/issues/760
    testSkippedInTravis("should be able to connect", async () => {
        await nodeA.connect(nodeB);
    });

    afterEach(async () => {
        await nodeA.clean();
        await nodeB.clean();
    });
});
