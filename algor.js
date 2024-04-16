import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SortingAlgorithmsUI extends JFrame implements ActionListener {
    private JButton btnBubbleSort, btnSelectionSort, btnInsertionSort;
    private JTextArea txtInput, txtOutput;
    private JLabel lblInput, lblOutput;

    public SortingAlgorithmsUI() {
        setTitle("Sorting Algorithms");
        setSize(400, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new GridLayout(3, 2));

        lblInput = new JLabel("Input:");
        add(lblInput);

        txtInput = new JTextArea();
        add(txtInput);

        lblOutput = new JLabel("Output:");
        add(lblOutput);

        txtOutput = new JTextArea();
        txtOutput.setEditable(false);
        add(txtOutput);

        btnBubbleSort = new JButton("Bubble Sort");
        btnBubbleSort.addActionListener(this);
        add(btnBubbleSort);

        btnSelectionSort = new JButton("Selection Sort");
        btnSelectionSort.addActionListener(this);
        add(btnSelectionSort);

        btnInsertionSort = new JButton("Insertion Sort");
        btnInsertionSort.addActionListener(this);
        add(btnInsertionSort);

        setVisible(true);
    }

    public static void main(String[] args) {
        new SortingAlgorithmsUI();
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == btnBubbleSort) {
            String[] input = txtInput.getText().split("\\s+");
            int[] arr = new int[input.length];
            for (int i = 0; i < input.length; i++) {
                arr[i] = Integer.parseInt(input[i]);
            }
            bubbleSort(arr);
            displayOutput(arr);
        } else if (e.getSource() == btnSelectionSort) {
            String[] input = txtInput.getText().split("\\s+");
            int[] arr = new int[input.length];
            for (int i = 0; i < input.length; i++) {
                arr[i] = Integer.parseInt(input[i]);
            }
            selectionSort(arr);
            displayOutput(arr);
        } else if (e.getSource() == btnInsertionSort) {
            String[] input = txtInput.getText().split("\\s+");
            int[] arr = new int[input.length];
            for (int i = 0; i < input.length; i++) {
                arr[i] = Integer.parseInt(input[i]);
            }
            insertionSort(arr);
            displayOutput(arr);
        }
    }

    private void displayOutput(int[] arr) {
        StringBuilder output = new StringBuilder();
        for (int num : arr) {
            output.append(num).append(" ");
        }
        txtOutput.setText(output.toString());
    }

    private void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    private void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
           
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    private void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
}
