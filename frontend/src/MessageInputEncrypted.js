import { MessageInput } from "stream-chat-react";
import React, { PureComponent } from 'react';

export class MessageInputEncrypted extends PureComponent {
  sendMessageEncrypted = async (data) => {
    const encryptedText = await this.props.virgil.eThree.encrypt(data.text, this.props.virgil.publicKeys);
    await this.props.channel.sendMessage({
      ...data,
      text: encryptedText
    });
  };

  render = () => {
    const newProps = {
      ...this.props,
      sendMessage: this.sendMessageEncrypted
    };

    return <MessageInput {...newProps} />
  }
}
