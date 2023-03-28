import React from 'react';
import NodeManager  from './node-manager';
import NodeClient from './node-client';
import API from './api-client';
export const NodeContext = React.createContext<{
    NodeManager: NodeManager;
    NodeClient: NodeClient;
}>({
    NodeManager: new NodeManager({}),
    NodeClient: new NodeClient(new API()),
});

export const useNodeClient = () => {
    const { NodeClient } = React.useContext(NodeContext);
    return NodeClient;
};

// create a server side context getter for the node manager
export const getNodeManager = () => {
    
}
