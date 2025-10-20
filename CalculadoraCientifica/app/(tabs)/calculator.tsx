import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  // adiciona valor digitado
  const handlePress = (value: string) => {
    if (error) setError('');
    setInput((prev) => prev + value);
  };

  // limpa tudo
  const handleClear = () => {
    setInput('');
    setResult('');
    setError('');
  };

  // apaga último dígito
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // executa operações básicas e científicas
  const handleEqual = () => {
    try {
      if (!input) return;
      const expr = input
        .replace(/π/g, Math.PI.toString())
        .replace(/√/g, 'Math.sqrt')
        .replace(/\^/g, '**');

      // eslint-disable-next-line no-eval
      const evalResult = eval(expr);

      if (!isFinite(evalResult)) {
        setError('Erro: divisão por zero');
        setResult('');
      } else {
        setResult(evalResult.toString());
      }
    } catch (e) {
      setError('Expressão inválida');
      setResult('');
    }
  };

  // funções científicas simples
  const handleScientific = (func: string) => {
    if (error) setError('');
    let val = input || result;
    if (!val) return;

    try {
      const num = parseFloat(val);
      let res = 0;
      switch (func) {
        case 'sin':
          res = Math.sin((num * Math.PI) / 180);
          break;
        case 'cos':
          res = Math.cos((num * Math.PI) / 180);
          break;
        case 'tan':
          res = Math.tan((num * Math.PI) / 180);
          break;
        case 'x²':
          res = Math.pow(num, 2);
          break;
        case '√':
          res = Math.sqrt(num);
          break;
        case '%':
          res = num / 100;
          break;
        default:
          return;
      }
      setResult(res.toString());
      setInput('');
    } catch {
      setError('Erro na operação');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.display}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <Text style={styles.resultText}>{result}</Text>
        )}
      </ScrollView>

      {/* linha 1 - científicas */}
      <View style={styles.row}>
        <CalcButton label="sin" onPress={() => handleScientific('sin')} />
        <CalcButton label="cos" onPress={() => handleScientific('cos')} />
        <CalcButton label="tan" onPress={() => handleScientific('tan')} />
        <CalcButton label="x²" onPress={() => handleScientific('x²')} />
      </View>

      {/* linha 2 - funções extras */}
      <View style={styles.row}>
        <CalcButton label="√" onPress={() => handlePress('√(')} />
        <CalcButton label="π" onPress={() => handlePress('π')} />
        <CalcButton label="%" onPress={() => handleScientific('%')} />
        <CalcButton label="^" onPress={() => handlePress('^')} />
      </View>

      {/* linha 3 */}
      <View style={styles.row}>
        <CalcButton label="C" color="#c45d1d" onPress={handleClear} />
        <CalcButton label="DEL" color="#c45d1d" onPress={handleDelete} />
        <CalcButton label="(" onPress={() => handlePress('(')} />
        <CalcButton label=")" onPress={() => handlePress(')')} />
      </View>

      {/* linha 4 */}
      <View style={styles.row}>
        <CalcButton label="7" onPress={() => handlePress('7')} />
        <CalcButton label="8" onPress={() => handlePress('8')} />
        <CalcButton label="9" onPress={() => handlePress('9')} />
        <CalcButton label="/" onPress={() => handlePress('/')} />
      </View>

      {/* linha 5 */}
      <View style={styles.row}>
        <CalcButton label="4" onPress={() => handlePress('4')} />
        <CalcButton label="5" onPress={() => handlePress('5')} />
        <CalcButton label="6" onPress={() => handlePress('6')} />
        <CalcButton label="*" onPress={() => handlePress('*')} />
      </View>

      {/* linha 6 */}
      <View style={styles.row}>
        <CalcButton label="1" onPress={() => handlePress('1')} />
        <CalcButton label="2" onPress={() => handlePress('2')} />
        <CalcButton label="3" onPress={() => handlePress('3')} />
        <CalcButton label="-" onPress={() => handlePress('-')} />
      </View>

      {/* linha 7 */}
      <View style={styles.row}>
        <CalcButton label="0" onPress={() => handlePress('0')} />
        <CalcButton label="." onPress={() => handlePress('.')} />
        <CalcButton label="=" flex={2} color="#6b256f" onPress={handleEqual} />
        <CalcButton label="+" onPress={() => handlePress('+')} />
      </View>
    </SafeAreaView>
  );
}

// botão reutilizável
function CalcButton({
  label,
  onPress,
  color = '#194b32',
  flex = 1,
}: {
  label: string;
  onPress: () => void;
  color?: string;
  flex?: number;
}) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color, flex }]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  display: {
    minHeight: 130,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputText: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'right',
  },
  resultText: {
    color: '#c45d1d',
    fontSize: 28,
    textAlign: 'right',
    marginTop: 10,
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: 20,
    textAlign: 'right',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
