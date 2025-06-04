import React from 'react';

type Props = {
  clockName: string;
  nameIntervalId: number;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timeIntervalId = 0;

  handleNewDate = () => {
    this.setState({ today: new Date() });
  };

  componentDidMount(): void {
    this.timeIntervalId = window.setInterval(this.handleNewDate, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.props.nameIntervalId);
    window.clearInterval(this.timeIntervalId);
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    if (this.state.today.getTime() !== prevState.today.getTime()) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toTimeString().slice(0, 8));
    }
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today.toTimeString().slice(0, 8)}</span>
      </div>
    );
  }
}
