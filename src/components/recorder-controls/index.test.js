import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecorderControls from ".";

const MOCK_RECORDER_STATE = {
  recordingMinutes: 3,
  recordingSeconds: 45,
  initRecording: false,
};

const MOCK_HANDLERS = {
  startRecording: jest.fn(),
  saveRecording: jest.fn(),
  cancelRecording: jest.fn(),
};

describe("Recorder controls tests", () => {
  test("Render recording time", () => {
    render(<RecorderControls recorderState={MOCK_RECORDER_STATE} handlers={MOCK_HANDLERS} />);

    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("45")).toBeInTheDocument();
  });

  test("Should init recorder", () => {
    render(<RecorderControls recorderState={MOCK_RECORDER_STATE} handlers={MOCK_HANDLERS} />);

    expect(screen.getByRole("button", { name: /start recording/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /cancel recording/i })).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /start recording/i }));
    expect(MOCK_HANDLERS.startRecording).toHaveBeenCalled();
  });

  test("Should save and cancel a recording", () => {
    const stateWithInitRecordingSetToTrue = { ...MOCK_RECORDER_STATE, initRecording: true };

    render(
      <RecorderControls recorderState={stateWithInitRecordingSetToTrue} handlers={MOCK_HANDLERS} />
    );

    expect(screen.queryByRole("button", { name: /cancel recording/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save recording/i })).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /save recording/i }));
    expect(MOCK_HANDLERS.saveRecording).toHaveBeenCalled();
    userEvent.click(screen.queryByRole("button", { name: /cancel recording/i }));
    expect(MOCK_HANDLERS.cancelRecording).toHaveBeenCalled();
  });
});
