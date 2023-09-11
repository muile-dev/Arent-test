import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

describe("AppRoutes", () => {
  test("renders HomePage when the path is '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("自分の記録")).toBeInTheDocument();
  });

  test("renders MyRecordPage when the path is '/my-record'", () => {
    render(
      <MemoryRouter initialEntries={["/my-record"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("自分の日記をもっと見る")).toBeInTheDocument();
  });

  test("renders ColumnPage when the path is '/columns'", () => {
    render(
      <MemoryRouter initialEntries={["/columns"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("特定商取引法に基づく表記")).toBeInTheDocument();
  });

  test("renders NotSupportPage when the path is not defined", () => {
    render(
      <MemoryRouter initialEntries={["/unknown-path"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("Page Not Supported")).toBeInTheDocument();
  });
});
